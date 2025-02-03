<script lang="ts">
    import type { SvelteHTMLElements } from "svelte/elements";
    import UpLink from "./up-link.svelte";
    import DownLink from "./down-link.svelte";

    interface LinkPointerProps {
        title: string;
        href?: string;
    }

    let { id, children, up, down, ... props }: SvelteHTMLElements["section"] & { up?: LinkPointerProps, down?: LinkPointerProps } = $props();
</script>

<section {id} {...props}>
    {#if up}
        <UpLink {...up}/>
    {/if}
    {@render children?.()}
    {#if down}
        <DownLink {...down}/>
    {/if}
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        min-height: 100vh;
    }
</style>
