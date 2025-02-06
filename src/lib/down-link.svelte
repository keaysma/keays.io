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
    class="down-link"
>
    <span>{title}</span><br>
    <FontAwesomeIcon {icon} />
</a>

<style lang="scss">
    .down-link {
        display: block;
        text-align: center;

        padding: 4rem 0;

        font-size: 0.75rem;

        @media (max-width: 768px) {
            display: none;
        }
    }
</style>
