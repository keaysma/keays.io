<script lang="ts">
    let { name, description, image, href, company, time }: Cert = $props();

    import type { Cert } from "./store";
</script>

<div class="card cert-card">
    <div class="fake-img" style="--image-url: url({image})"></div>
    <hgroup>
        <h4>{name}</h4>
        <h5>{company}</h5>
        <h6>{time}</h6>
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
        margin: 2rem 4rem 1rem;
        padding: 1rem 0.5rem 0.5rem 4rem;

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

            --a: #b5d5d445;
            --b: #b5d5d415;
            --c: #38475a35;
            --d: #ffffff02;

            background:
                var(--image-url) center / 85% no-repeat,
                linear-gradient(135deg, var(--a) 25%, var(--d) 25%) -10px 0/
                    20px 20px,
                linear-gradient(225deg, var(--b) 25%, var(--d) 25%) -10px 0/
                    20px 20px,
                linear-gradient(315deg, var(--a) 25%, var(--d) 25%) 0px 0/ 20px
                    20px,
                linear-gradient(45deg, var(--b) 25%, var(--c) 25%) 0px 0/ 20px
                    20px,
                var(--bg-main);
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
