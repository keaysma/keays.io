<script lang="ts">
    import ProjectCard from "$lib/project-card.svelte";
    import Section from "$lib/Section.svelte";

    import { projects } from "$lib/store";
    import ProjectDisplay from "$lib/project-display.svelte";
</script>

<Section
    id="projects"
    format="block"
    up={{ title: "about" }}
    down={{ title: "experience" }}
>
    <h2 class="bar">Projects</h2>
    <div class="projects-frame">
        <!-- List -->
        <ul class="projects-list">
            {#each projects as project, i}
                {#if !project.hidden}
                    <ProjectCard id={i} {...project} />
                {/if}
            {/each}
        </ul>

        <!-- Display -->
        <div class="display-wrapper">
            <ProjectDisplay />
        </div>
    </div>
</Section>

<style lang="scss">
    .projects-frame {
        position: relative;
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 0.5em 0;
        gap: 1rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        > .projects-list {
            position: relative;
            display: grid;
            width: 100%;
            height: min-content;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }

        > .display-wrapper {
            position: relative;
            // display: block;

            // works on the condition that
            // the descriptions are relatively short
            // and only ever pass the intrinsict height limit
            // by a little bit (like 5-60px max)
            height: 24rem;
            min-height: 50vh;
            overflow: visible;

            @media (max-width: 768px) {
                &:not(:has(.placeholder)) {
                    position: fixed;
                    top: 0;
                    left: 0;

                    width: 100vw;
                    height: 100vh;

                    z-index: 10;

                    padding: 4rem 2rem;

                    background: color-mix(
                        in srgb,
                        var(--bg-main) 90%,
                        transparent
                    );
                    backdrop-filter: blur(5px);
                }
            }
        }
    }
</style>
