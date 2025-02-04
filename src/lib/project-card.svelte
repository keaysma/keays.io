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

    const onmouseenter = () => {
        currentProjectId.set(id);
    };

    const onmouseleave = () => {
        currentProjectId.set(undefined);
    };
</script>

<li>
    <a
        {href}
        target="_blank"
        class="project-card"
        {onmouseenter}
        {onmouseleave}
    >
        <h3>{title}</h3>
        <p>{brief}</p>
    </a>
</li>

<style>
    .project-card {
        display: block;
        height: 6rem;
        padding: 0 0.5rem;
        border: 1px solid var(--t-main);
        box-shadow: 0 3px var(--t-main);
        border-radius: 0.5rem;
        font-size: x-large;

        > p {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }
    }
</style>
