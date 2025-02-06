<script lang="ts">
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import { faChevronUp as icon } from "@fortawesome/free-solid-svg-icons";

    let {
        title,
        href,
    }: {
        title: string;
        href?: string;
    } = $props();
</script>

<a href={href || `#${title}`} class="up-link">
    <FontAwesomeIcon {icon} /><br />
    <span>{title}</span>
</a>

<style lang="scss">
    .up-link {
        display: block;
        text-align: center;

        padding: 4rem 0;

        font-size: 0.75rem;

        @media (max-width: 768px) {
            display: none;
        }
    }
</style>
