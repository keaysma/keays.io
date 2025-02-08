<script lang="ts">
    import { currentProjectId } from "$lib/store";

    let {
        id,
        title,
        href,
        brief,
    }: {
        id: number;
        title: string;
        href: string;
        brief: string;
    } = $props();

    const onmousedown = () => {
        currentProjectId.set(id);
    };
</script>

<li>
    <button aria-roledescription="more" class="card project-card" {onmousedown}>
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
        }

        > p {
            font-size: 0.875rem;
            line-height: 1.25rem;
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
