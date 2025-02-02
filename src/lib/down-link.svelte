<script lang="ts">
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import { faChevronDown as icon } from "@fortawesome/free-solid-svg-icons";

    let {
        href,
        title,
    }: {
        href?: string;
        title: string;
    } = $props();
</script>

<a
    href={href || `#${title}`}
    class="flex-col items-center hidden md:flex text-xs mt-24 mx-auto z-10"
>
    <span class="pb-px">{title}</span>
    <FontAwesomeIcon {icon} />
</a>
