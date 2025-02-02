<svelte:head>
    <title>Michael-Andrew Keays</title>
</svelte:head>

<section id="home">
    <div class="accent top">
        <div class="line"></div>
        <p class="sun">✺</p>
    </div>
    <div class="accent bottom">
        <div class="line"></div>
        <p class="sun">✺</p>
    </div>

    <h1 class="text-7xl md:text-9xl">Michael.</h1>

    <menu class="menu">
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="/resume.pdf" target="_blank">resume</a></li>
    </menu>
</section>

<style lang="scss">
    section#home {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;

        align-items: center;
        justify-content: center;

        > menu {
            width: 17.5em;
            transform: translate(-8em, -0.5em);
            border-top: 2px solid var(--t-main);

            @media (max-width: 768px) {
                width: 9.5rem;
                transform: translate(-4.6em, -0.5em);
                border-top: 2px solid var(--t-main);
            }
        }
    }

    .accent {
        display: block;
        position: absolute;

        height: 35px;

        &.top {
            left: 0;
            top: 4em;

            > .sun {
                float: right;
            }
        }

        &.bottom {
            right: 0;
            bottom: 2em;

            > .sun {
                float: left;
            }
        }

        > .line {
            display: inline-block;
            height: 2px;
            width: 95vw;
            background-color: var(--t-main);
            margin: auto 0;
        }

        > .sun {
            display: inline-block;
            margin: auto 5px;
            height: 32px;
            line-height: 2.05em;
        }
    }
</style>
