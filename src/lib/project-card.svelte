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
        class="flex flex-col h-20 md:h-24 px-2 border rounded-lg text-2xl"
        style="border-color: var(--t-main); box-shadow: 0 2px var(--t-main);"
        {onmouseenter}
        {onmouseleave}
    >
        <h3>{title}</h3>
        <p class="text-sm">{brief}</p>
    </a>
</li>
