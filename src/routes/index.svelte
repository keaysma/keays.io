<script context="module">
	import Hero from "$lib/content/Hero.svelte";
    import About from "$lib/content/About.svelte";
    import Experience from "$lib/content/Experience.svelte";
    import Skills from "$lib/content/Skills.svelte";
    import Resume from "$lib/content/Resume.svelte";

	const gradientConfig = [
		[45,	1,		{h: 0, s: 0, l: 0, p: 0},		{h: 237, s: 100, l: 20, p: 0},		{h: 292, s: 100, l: 50,  p: 100},		{h: 0, s: 0, l: 0, p: 0}],
		[135,	1,		{h: 0, s: 0, l: 0, p: 0},		{h: 300, s: 100, l: 20, p: 0},		{h: 350, s: 100, l: 50,  p: 100},		{h: 0, s: 0, l: 0, p: 0}],
		[365,	1,		{h: 0, s: 0, l: 0, p: 0},		{h: 137, s: 100, l: 10, p: 0},		{h: 150, s: 80,  l: 40,  p: 100},		{h: 0, s: 0, l: 0, p: 0}],
		[460,	0.8,	{h: 0, s: 0, l: 0, p: 30},		{h: 337, s: 0,   l: 100, p: 30},	{h: 191, s: 0,   l: 100, p: 30.5},		{h: 0, s: 0, l: 0, p: 30.5}],
		[495,	12,		{h: 0, s: 87, l: 50, p: 0},		{h: 18,  s: 92,  l: 47, p: 19},		{h: 57,  s: 100, l: 37,  p: 59},		{h: 171, s: 100, l: 36, p: 87}],
	]

	const calculateGradientProgress = (a, b, progress) => {
		return a + ((b - a) * progress)
	}

	const calculateGradientProgressMulti = (a, b, progress) => {
		return Object.entries(a).reduce(
			(res, [k, v]) => ({
				... res,
				[k]: calculateGradientProgress(v, b[k] ?? v, progress)
			}),
			{}
		)
	}
</script>

<Hero/>
<div class="my-auto ml-auto xl:pt-28 px-4 lg:px-0 lg:pr-16 xl:pr-48 lg:w-7/12">
	<About/>
	<Experience/>
	<Skills/>
	<Resume/>
</div>

<svelte:window 
	on:scroll={
		(event) => {
			const body = document.querySelector('body')
			const y = window.scrollY / window.innerHeight;

			const [startY, endY] = [Math.floor(y), Math.ceil(y)]
			const [start, end] = [gradientConfig.at(startY), gradientConfig.at(endY)]
			
			if(!start || !end) return

			/*console.debug({
				startSection, endSection,
				start, end,
			})*/

			const bias = end[1] - start[1]
			const progress = Math.pow(y - startY, bias + 1)

			const [degStart, degEnd] = [start[0], end[0]]
			const deg = calculateGradientProgress(degStart, degEnd, progress)

			const colors = start.slice(2).map((item, index) => calculateGradientProgressMulti(item, end[index + 2] || item, progress))

			body.style.backgroundImage = `
				linear-gradient(
					${deg}deg,
					${colors.map(({h, s, l, p}) => `hsl(${h}deg ${s}% ${l}%) ${p}%`).join(',')}
				)
			`;
		}
	} 
/>