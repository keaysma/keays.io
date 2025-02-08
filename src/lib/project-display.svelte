<script lang="ts">
    import { currentProjectId, projects, type Project } from "$lib/store";
    import { faX } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";

    let project: Project | null = null;
    currentProjectId.subscribe((val) => (project = projects[val]));

    const mobileClose = () => {
        currentProjectId.set(null);
    };
</script>

{#if project}
    <h3>{project.title}</h3>
    <button class="close-button" onclick={mobileClose}>
        <FontAwesomeIcon class="svg-lg" icon={faX} />
    </button>
    <p>{project.description}</p>
    {#if project.links}
        <hr />
        <ul>
            {#each project.links as { href, labelOverride }}
                <li>
                    <a {href} target="_blank">
                        <p>
                            {#if labelOverride}
                                {labelOverride}
                            {:else if href.includes("github")}
                                GitHub Repo
                            {:else}
                                Project Website
                            {/if}
                        </p>
                        <span>{href}</span>
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
    <!-- <a>{project.href}</a> -->
{:else}
    <p class="placeholder">Click on a card to learn more</p>
{/if}

<style lang="scss">
    h3 {
        font-size: 2rem;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h3 + p {
        font-size: small;
    }

    button.close-button {
        display: none;
        position: fixed;
        top: 4.25rem;
        right: 3rem;
        color: var(--t-main);

        @media (max-width: 768px) {
            display: block;
        }
    }

    hr {
        margin-top: 0.5rem;
        padding-top: 0.25rem;

        border-style: dotted;
    }

    ul > li {
        margin-top: 0.75rem;
        > a {
            &:hover > p,
            span {
                text-decoration: underline;
            }

            span {
                font-size: small;
            }

            p {
                line-height: 6px;
            }
        }
    }
</style>
