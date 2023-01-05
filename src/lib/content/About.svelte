<script>
    import Section from "$lib/Section.svelte";
    import Title from "$lib/Title.svelte";
</script>

<Section id=about>
    <Title>Who is Michael?</Title>
    <p class="text-2xl w-full text-white">
        Passionate technologist, enthusiastic learner, strong communicator, and
        experienced leader. Excited to take on new opportunities and challanges.
        I have spent time building skills across several different software
        industries since I was young. I am at my best when trailblazing, and
        enjoy working as both a self-starter, a team member, and also as a
        mentor. While I focus myself as a developer, I love working with all
        parts of the software cycle: From management, to quality, to marketing,
        user experience, and all parts in between.
    </p>
    <svg class="hidden lg:block absolute left-0 transform -translate-y-36" viewBox="0 0 100 100">
        <path
            class="path"
            fill="none"
            stroke="gold"
            stroke-width="0.5"
            d="
                M 000  005 
                C 000  005  050  -00  030  040 
                C 025  050  -10  080  100  070
            "
        />
    </svg>
</Section>

<svelte:window
    on:scroll={(event) => {
        const path = document.querySelector(".path");
        const y = window.scrollY / window.innerHeight;

        const offsetA = 0.68;
        const progressA = Math.max(offsetA, Math.min(1 + offsetA, y)) - offsetA;

        const offsetB = 0.79;
        const progressB = Math.max(offsetB, Math.min(1 + offsetB, y)) - offsetB;

        const strokeDashOffset =
            1000 -
            progressA * 400 -
            Math.ceil(progressB - 0.2) * 850 -
            progressB * 200;

        console.log({
            y,
            progressA,
            progressB,
            strokeDashOffset,
        });

        path.style.strokeDashoffset = strokeDashOffset;
    }}
/>

<style>
    .path {
        stroke-dashoffset: 100;
        stroke-dasharray: 1000;
    }
</style>
