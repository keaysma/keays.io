<script lang="ts">
    import type { SvelteHTMLElements } from "svelte/elements";
    import UpLink from "./up-link.svelte";
    import DownLink from "./down-link.svelte";

    interface LinkPointerProps {
        title: string;
        href?: string;
    }

    let {
        id,
        format,
        children,
        up,
        down,
        ...props
    }: SvelteHTMLElements["section"] & {
        up?: LinkPointerProps;
        down?: LinkPointerProps;
        format?: "flex" | "block";
    } = $props();
</script>

<section {id} {...props} data-format={format ?? "flex"}>
    {#if up}
        <UpLink {...up} />
    {/if}
    {@render children?.()}
    {#if down}
        <DownLink {...down} />
    {/if}
</section>

<style lang="scss">
    section {
        position: relative;
        width: 100%;
        min-height: 100vh;

        &[data-format="block"] {
            position: relative;
            display: block;
            max-width: 60rem;
            padding: 0 1.5rem;
            margin: auto auto;
        }

        &[data-format="flex"] {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
