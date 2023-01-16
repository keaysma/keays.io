<script>
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import {
        faChevronDown as icon
    } from "@fortawesome/free-solid-svg-icons";

    export let href, title;
</script>

<a href={href || `#${title}`} class="flex-col items-center hidden md:flex text-xs mt-24 mx-auto z-10">
    <span class="pb-px">{ title }</span>
    <FontAwesomeIcon {icon} />
</a>
