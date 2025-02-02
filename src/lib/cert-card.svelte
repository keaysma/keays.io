<script lang="ts">
    export let name, company, time, image, href;
    const src = image, alt = name;

    import { FontAwesomeIcon } from "fontawesome-svelte";
    import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
</script>

<div
    class="flex flex-col lg:flex-row items-center gap-2 w-10/12 border rounded-xl"
    style="border-color: var(--t-main); box-shadow: 0 1px var(--t-main);"
>
    <div
        class="w-full lg:w-24 h-24 lg:h-full p-2 rounded-t-xl lg:rounded-l-xl"
        style="background-color: var(--t-main);"
    >
        {#if src}
            <img {src} {alt} class="h-full mx-auto" />
        {/if}
    </div>
    <div class="flex flex-col lg:w-9/12 p-2 lg:p-0">
        <h3 class="text-2xl">{name}</h3>
        <div class="flex flex-col lg:flex-row lg:items-end lg:gap-2">
            <h4>{company},</h4>
            <p class="text-sm mb-px">{time}</p>
        </div>
    </div>
    {#if href}
        <a {href} class="w-20 flex flex-col items-center mx-auto lg:ml-0 lg:mr-4">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>See cert</span>
        </a>
    {/if}
</div>

<style>
    img {
        max-width: 100%;
    }
</style>