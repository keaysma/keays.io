<script>
    export let name, company, time, image, href;
    const src = image, alt = name;

    import { FontAwesomeIcon } from "fontawesome-svelte";
    import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
</script>

<div
    class="flex flex-col md:flex-row items-center gap-2 w-full border rounded-xl"
    style="border-color: var(--t-main); box-shadow: 0 1px var(--t-main);"
>
    <div
        class="w-full md:w-24 h-24 p-2 rounded-t-xl md:rounded-l-xl"
        style="background-color: var(--t-main);"
    >
        {#if src}
            <img {src} {alt} class="h-full mx-auto" />
        {/if}
    </div>
    <div class="flex flex-col md:w-9/12 p-2 md:p-0">
        <h3 class="text-2xl">{name}</h3>
        <div class="flex flex-col md:flex-row md:items-end md:gap-2">
            <h4>{company},</h4>
            <p class="text-sm mb-px">{time}</p>
        </div>
    </div>
    {#if href}
        <a {href} class="w-20 flex flex-col items-center mx-auto md:ml-0 md:mr-4">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>See cert</span>
        </a>
    {/if}
</div>
