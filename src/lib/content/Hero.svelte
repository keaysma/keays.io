<script>
    import Section from "$lib/Section.svelte";
</script>

<svelte:head>
    <title>Michael-Andrew Keays</title>
</svelte:head>

<Section id="home">
    <div class="accent top">
        <div class="line"></div>
        <p class="sun">✺</p>
    </div>
    <div class="accent bottom">
        <div class="line"></div>
        <p class="sun">✺</p>
    </div>

    <h1>Michael.</h1>

    <menu class="menu">
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="/resume.pdf" target="_blank">resume</a></li>
    </menu>
</Section>

<style lang="scss">
    h1 {
        font-size: 8rem;

        // This em is intentional:
        // Matches the font-size of the h1
        line-height: 1em;

        @media (max-width: 768px) {
            font-size: 4.5rem;
        }
    }
    menu {
        width: 17.5rem;
        transform: translate(-8em, -0.5em);
        border-top: 2px solid var(--t-main);

        @media (max-width: 768px) {
            width: 9.5rem;
            transform: translate(-4.6em, -0.35em);
            border-top: 2px solid var(--t-main);
        }
    }

    .accent {
        display: block;
        position: absolute;

        height: 35px;

        &.top {
            left: 0;
            top: 2.5rem;

            > .sun {
                float: right;
            }
        }

        &.bottom {
            right: 0;
            bottom: 2.5rem;

            > .sun {
                float: left;
            }
        }

        > .line {
            display: inline-block;
            height: 2px;
            width: 90vw;
            background-color: var(--t-main);
            margin: auto 0;
        }

        > .sun {
            display: inline-block;
            margin: auto 5px;
            height: 32px;
            line-height: 2.05rem;
        }
    }
</style>
