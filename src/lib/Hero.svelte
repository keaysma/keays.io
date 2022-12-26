<svelte:head>
    <title>Michael-Andrew Keays</title>
</svelte:head>

<section id="home" class="h-screen w-full">
    <div class="flex flex-col px-4 gap-2 sm:gap-0 mr-auto">
        <h1 class="text-left text-6xl sm:text-8xl">Michael</h1>
        <div class="backdrop-invert">
            <h1
                class="text-left text-6xl sm:text-8xl invert text-shadow italic -ml-3"
            >
                Andrew
            </h1>
        </div>
        <h1 class="text-left text-6xl sm:text-8xl">Keays</h1>
    </div>
    <div class="w-full flex flex-col sm:flex-row justify-between sm:px-6">
        <h2>Software Engineer</h2>
        <div class="flex flex-row gap-4 sm:gap-12">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="/resume">Resume</a>
        </div>
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Michroma&family=Righteous&family=Titillium+Web:wght@600&family=Unbounded&display=swap");

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    #home {
        background-image: linear-gradient(
            45deg,
            hsl(237deg 100% 20%) 0%,
            hsl(253deg 87% 25%) 11%,
            hsl(261deg 84% 29%) 22%,
            hsl(267deg 83% 33%) 33%,
            hsl(272deg 82% 37%) 44%,
            hsl(276deg 82% 41%) 56%,
            hsl(280deg 83% 44%) 67%,
            hsl(284deg 86% 47%) 78%,
            hsl(288deg 91% 49%) 89%,
            hsl(292deg 100% 50%) 100%
        );
        /*
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        */
    }

    h1 {
        width: 100%;
        color: white;
        font-family: "Michroma";
        padding: 0;
    }

    h2 {
        color: white;
    }

    a {
        color: white;
    }

    .text-shadow {
        text-shadow: 2px 0 #0008;
    }
</style>
