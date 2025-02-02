<script lang="ts">
    export let id = "";
</script>

<section id={id} class="flex flex-col justify-center">
    <slot/>
</section>

<style lang="scss">
    section {
        width: 100%;
        min-height: 100vh;
    }
</style>