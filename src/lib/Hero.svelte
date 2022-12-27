<svelte:head>
    <title>Michael-Andrew Keays</title>
</svelte:head>

<section id="home" class="h-screen w-full">
    <div class="hidden md:fixed left-0 sm:flex flex-col px-4 gap-2 sm:gap-0 mr-auto">
        <h1 class="text-left text-6xl sm:text-6xl">Michael</h1>
        <div class="backdrop-invert">
            <h1
                class="text-left text-6xl sm:text-6xl invert text-shadow italic -ml-3"
            >
                Andrew
            </h1>
        </div>
        <h1 class="text-left text-6xl sm:text-6xl">Keays</h1>
    </div>
    <div class="w-full hidden sm:flex flex-col sm:flex-row justify-between sm:px-6 mt-80">
        <h2 class="fixed">Software Engineer</h2>
        <div class="flex flex-row gap-4 sm:gap-12 ml-auto">
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
