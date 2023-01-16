<script>
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import {
        faChevronUp as icon
    } from "@fortawesome/free-solid-svg-icons";
    export let title, href
</script>

<a href={href || `#${title}`} class="flex-col items-center hidden md:flex text-xs mb-24 mx-auto">
    <FontAwesomeIcon {icon} />
    <span>{ title }</span>
</a>