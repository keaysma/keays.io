<script lang="ts">
    import { currentProjectId, type Project } from "$lib/store";

    let { id, title, brief }: Project & { id: number } = $props();

    let currentProjectIdValue: number | undefined = $state();
    currentProjectId.subscribe((val) => (currentProjectIdValue = val));

    const onmousedown = () => {
        currentProjectId.set(id);
    };
</script>

<li>
    <button
        aria-roledescription="more"
        class="card project-card"
        class:inverted-colors={currentProjectIdValue === id}
        {onmousedown}
    >
        <h3>{title}</h3>
        <p>{brief}</p>
    </button>
</li>

<style lang="scss">
    .project-card {
        display: block;
        height: 6rem;
        padding: 0 0.5rem;

        > h3 {
            font-size: x-large;
            color: inherit;
        }

        > p {
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: inherit;
        }

        // Re-replicates the hover affect,
        // Allows the border to work as sort of an "inset"
        &.inverted-colors {
            border: 1px solid var(--bg-main);
            border-bottom-width: 4px;
            box-shadow:
                0 0px 0 2px var(--t-main),
                0 1px 0 2px var(--t-main);

            &:hover {
                box-shadow:
                    0 0px 0 2px var(--t-main),
                    0 4px 0 2px var(--t-main);
            }
        }

        // I once was an anchor, not a button
        // These rules are separated-out so I can change my mind easily
        &:is(button) {
            position: relative;
            width: 100%;
            text-align: left;

            > h3 {
                position: absolute;
                top: 0;
            }

            > p {
                position: absolute;
                top: 2rem;
            }
        }
    }
</style>
