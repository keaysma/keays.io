<script>
    import Section from "$lib/Section.svelte";
</script>

<svelte:head>
    <title>Michael-Andrew Keays</title>
</svelte:head>

<section id="home" class="w-full h-screen flex flex-col justify-center">
    <div
        class="relative flex flex-col items-center justify-center w-full h-full"
    >
        <h1 class="text-7xl md:text-9xl">Michael.</h1>
        <div class="accent a">
            <div class="line" />
            <p class="sun">✺</p>
        </div>
        <div class="accent b">
            <div class="line" />
            <p class="sun">✺</p>
        </div>
        <div class="menu">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="/">resume</a>
        </div>
    </div>
</section>

<style>
    .accent {
        display: flex;
        align-items: center;

        position: absolute;
    }

    .accent.a {
        left: 0;
        top: 5vh;
    }

    .accent.b {
        flex-direction: row-reverse;

        right: 0;
        bottom: 5vh;
    }

    .accent .line {
        height: 2px;
        width: 95vw;
        background-color: var(--t-main);
    }

    .accent .sun {
        margin: 0 5px;
    }

    .menu {
        border-top: 2px solid var(--t-main);
        color: var(--t-main);

        display: flex;
        flex-direction: column;
        align-items: start;

        width: 17.5rem;
        transform: translate(-7.9rem, -0.75rem);
    }

    @media (max-width: 768px) {
        .accent .line {
            width: 90vw;
        }

        .menu {
            width: 9.75rem;
            transform: translate(-4.45rem, -0.4rem);
        }
    }
</style>
