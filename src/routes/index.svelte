<script context="module">
	import Hero from "$lib/Hero.svelte";
    import About from "$lib/About.svelte";
    import Experience from "$lib/Experience.svelte";
    import Skills from "$lib/Skills.svelte";

	const gradientConfig = [
		[45,	{h: 0, s: 0, l: 0},		{h: 237, s: 100, l: 0},		{h: 292, s: 100, l: 0},		{h: 0, s: 0, l: 0}],
		[45,	{h: 0, s: 0, l: 0},		{h: 237, s: 100, l: 0},		{h: 292, s: 100, l: 0},		{h: 0, s: 0, l: 0}],
	]
</script>

<Hero/>
<About/>
<Experience/>
<Skills/>

<svelte:window 
	on:scroll={
		(event) => {
			const body = document.querySelector('body')
			const y = window.scrollY / window.innerHeight;
			// console.log({ y })

			/*
			237 -> 300
			292 -> 350
			*/

			const firstSectionProgress = Math.min(1, y)
			const secondSectionProgress = Math.max(1, Math.min(2, y)) - 1
			const thirdSectionProgress = Math.max(2, Math.min(3, y)) - 2

			console.log({
				firstSectionProgress, secondSectionProgress, thirdSectionProgress
			})

			const degX = 45  + (90 * firstSectionProgress) + (230 * secondSectionProgress) + (95 * thirdSectionProgress);
			const degA = 237 + (63 * firstSectionProgress) + (-63 * secondSectionProgress) + (100 * thirdSectionProgress);
			const degB = 292 + (58 * firstSectionProgress) + (-159 * secondSectionProgress) + (200 * thirdSectionProgress);
			const satA = 100 - (thirdSectionProgress * 100);
			const satB = 20 + (thirdSectionProgress * 80);
			const satC = 50 + (thirdSectionProgress * 50);

			const thirdSectionScaleCenter = 30
			const scaleA = thirdSectionProgress * (thirdSectionScaleCenter + 2);
			const scaleB = thirdSectionProgress * (thirdSectionScaleCenter + 2);
			const scaleC = 100 - (thirdSectionProgress * (100 - (thirdSectionScaleCenter + 3)));
			const scaleD = 125 - (thirdSectionProgress * (100 - (thirdSectionScaleCenter + 3) + 25));


			body.style.backgroundImage = `
				linear-gradient(
					${degX}deg, 
					rgb(0, 0, 0) ${scaleA}%,
					hsl(${degA}deg ${satA}% ${satB}%) ${scaleB}%, 
					hsl(${degB}deg ${satA}% ${satC}%) ${scaleC}%,
					rgb(0, 0, 0) ${scaleD}%
				)
			`;
		}
	} 
/>