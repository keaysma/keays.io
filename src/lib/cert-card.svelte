<script lang="ts">
    let {
        name,
        description,
        image,
        imageAdditionalClass,
        href,
        company,
        time,
    }: Cert = $props();

    import type { Cert } from "./store";
</script>

<div class="card cert-card">
    <div
        class="fake-img {imageAdditionalClass}"
        style="--image-url: url({image})"
    ></div>
    <hgroup>
        <h3>{name}</h3>
        <h4>{company}</h4>
        <h5>{time}</h5>
    </hgroup>
    {#if description}
        <p>{description}</p>
    {/if}
    {#if href}
        <a class="inverted-colors interactive" {href}>see cert →</a>
    {/if}
</div>
<br />

<style lang="scss">
    .cert-card {
        position: relative;
        display: block;
        margin: 2rem 1rem 1rem 4rem;
        padding: 1rem 0.5rem 0.5rem 4rem;

        @media (max-width: 768px) {
            margin-left: 2rem;
            margin-right: -0.5rem;
        }

        &:has(a) {
            padding-bottom: 2.75rem;
        }

        > .fake-img {
            border: 1px solid var(--t-main);
            border-radius: 0.5rem;

            position: absolute;
            top: -3rem;
            left: -3rem;
            width: 6rem;
            height: 6rem;

            --a: #b5d5d425;
            --b: #b5d5d415;
            --c: #38475a15;
            --d: #ffffff02;

            --background-image: var(--image-url) center / 85% no-repeat;
            --background-gradient: linear-gradient(
                        135deg,
                        var(--a) 25%,
                        var(--d) 25%
                    ) -10px
                    0/ 20px 20px,
                linear-gradient(225deg, var(--b) 25%, var(--d) 25%) -10px 0/
                    20px 20px,
                linear-gradient(315deg, var(--a) 25%, var(--d) 25%) 0px 0/ 20px
                    20px,
                linear-gradient(45deg, var(--b) 25%, var(--c) 25%) 0px 0/ 20px
                    20px;
            --background-color: var(--bg-main);

            background: var(--background-image), var(--background-gradient),
                var(--background-color);

            &.bg-circle {
                --c1: #f5f8fbfa;
                --background-image-background: radial-gradient(
                    var(--c1) 60%,
                    transparent 60%
                );
                background: var(--background-image),
                    var(--background-image-background),
                    var(--background-gradient), var(--background-color);
            }

            &.image-full {
                background: var(--image-url) center / 100% no-repeat;
            }

            &.image-full-white {
                background: var(--background-image) #FFF;
            }
        }

        a {
            float: right;
            padding: 0.25rem 0.5rem 0.25rem;
            margin-top: 0.25rem;
            border: 1px solid var(--bg-main);
            border-radius: 0.5rem;
            box-shadow: 0px 0px 0px 2px var(--t-main);
        }

        p {
            margin-top: 5px;
            font-size: small;
        }
    }
</style>
