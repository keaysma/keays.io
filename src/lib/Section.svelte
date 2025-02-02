<script lang="ts">
    import type { SvelteHTMLElements } from "svelte/elements";

    let { id, children }: SvelteHTMLElements["section"] = $props();
</script>

<section {id}>
    {@render children?.()}
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        min-height: 100vh;
    }
</style>
