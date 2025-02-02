<script lang="ts">
    import { currentProjectId } from "$lib/store";

    export let id, title, href, brief;
    export const description="", image="";

    const enter = () => {
        currentProjectId.set(id);
    };

    const leave = () => {
        currentProjectId.set(undefined);
    };
</script>

<li>
    <a
        {href} target='_blank'
        class="flex flex-col h-20 md:h-24 px-2 border rounded-lg text-2xl"
        style="border-color: var(--t-main); box-shadow: 0 2px var(--t-main);"
        on:mouseenter={enter}
        on:mouseleave={leave}
    >
        <h3>{title}</h3>
        <p class="text-sm">{brief}</p>
</a>
</li>
