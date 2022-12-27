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
    <svg class="absolute" viewBox="0 0 340 333">
        <path
            class="path"
            fill="transparent"
            stroke="gold"
            stroke-width="0.5"
            d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
        s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
        C46.039,146.545,53.039,128.545,66.039,133.545z"
        />
    </svg>
</section>

<svelte:window 
	on:scroll={
		(event) => {
			const body = document.querySelector('body')
            const path = document.querySelector('.path')
			const y = window.scrollY / window.innerHeight;

			const firstSectionProgress = Math.min(1, y)
			const secondSectionProgress = Math.max(1, Math.min(2, y)) - 1
			const thirdSectionProgress = Math.max(2, Math.min(3, y)) - 2


			path.style.strokeDashoffset = 1000 - (secondSectionProgress * 2000)
		}
	} 
/>

<style>
    .path {
        stroke-dashoffset: 100;
        stroke-dasharray: 1000;
    }
</style>
