<script lang="ts">
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<style>
	main {
		padding: 0;
		width: 100%;
		/* max-width: 1024px; */
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
