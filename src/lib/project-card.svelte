<script lang="ts">
    import { currentProjectId, type Project } from "$lib/store";

    let { id, title, brief }: Project & { id: number } = $props();

    let currentProjectIdValue: number | undefined = $state();
    currentProjectId.subscribe((val) => (currentProjectIdValue = val));

    const onclick = () => {
        currentProjectId.set(id);
    };
</script>

<li>
    <button
        aria-roledescription="more"
        class="card project-card"
        class:inverted-colors={currentProjectIdValue === id}
        {onclick}
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
