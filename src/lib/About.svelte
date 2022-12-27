<section id="about" class="flex flex-col gap-4 min-h-screen">
    <div class="my-auto ml-auto xl:pt-28 pr-16 xl:pr-48 w-7/12">
        <div class="backdrop-invert w-84">
            <h2 class="text-6xl text-white invert italic">Who is Michael?</h2>
        </div>
        <p class="text-2xl w-full text-white">
            Passionate technologist, enthusiastic learner, strong communicator,
            and experienced leader. Excited to take on new opportunities and
            challanges. I have spent time building skills across several
            different software industries since I was young. I am at my best
            when trailblazing, and enjoy working as both a self-starter, a team
            member, and also as a mentor. While I focus myself as a developer, I
            love working with all parts of the software cycle: From management,
            to quality, to marketing, user experience, and all parts in between.
        </p>
    </div>
    <svg class="absolute" viewBox="0 0 100 100">
        <!-- <path 
            class="path" 
            fill=none 
            stroke="gold" 
            stroke-width="0.5" 
            d="
                M 6.039 33.545 
                C 6.039 32.545 184.718 14.853 122.878 193.627 
                C 141.038 252.401 269.07 225.993 265.07 237.993 
                C 172.471 243.543 154.966 228.646 128.588 190.291 
                C 109.869 109.988 199.052 100.858 63.039 40.545 
                Z
            "
        /> -->
        <path 
            class="path" 
            fill=none 
            stroke="gold" 
            stroke-width="0.5" 
            d="
                M 000  005 
                C 000  005  050  -00  030  040 
                C 025  050  -10  080  100  070
            "
        />
    </svg>
</section>

<svelte:window
    on:scroll={(event) => {
        const path = document.querySelector(".path");
        const y = window.scrollY / window.innerHeight;

        const offsetA = 0.68;
        const progressA = Math.max(offsetA, Math.min(1 + offsetA, y)) - offsetA;

        const offsetB = 0.77;
        const progressB = Math.max(offsetB, Math.min(1 + offsetB, y)) - offsetB;

        const strokeDashOffset = 1000 - (progressA * 400) - (Math.ceil(progressB - 0.2) * 850) - (progressB * 100);

        console.log({
            y, progressA, progressB, strokeDashOffset
        })

        path.style.strokeDashoffset = strokeDashOffset;
    }}
/>

<style>
    .path {
        stroke-dashoffset: 100;
        stroke-dasharray: 1000;
    }
</style>
