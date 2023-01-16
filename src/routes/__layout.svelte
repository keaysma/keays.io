<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>

<!-- <footer>
	<p>🔥</p>
</footer> -->

<style>
	main {
		padding: 0;
		width: 100%;
		/* max-width: 1024px; */
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
