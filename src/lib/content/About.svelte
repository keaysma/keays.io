<script lang="ts">
    import Section from "$lib/Section.svelte";
</script>

<Section id="about" up={{ title: "home" }} down={{ title: "projects" }}>
    <h2>Who is Michael?</h2>
    <p class="text-content">
        Purpose, Passion, Patience <br />
        Community, Collaboration, <br />
        Learning, Leading, <br /> <br />

        <!-- I like code, and web-dev. <br /> -->
        I am passionate about building things on the web. <br />
        I love solving challenging problems in new ways, and making a positive difference
        in the world. <br />
        I survive on a diet of <strike>coffee</strike> learning something new
        everyday. <br />
        I revel in the unknown, and the experimental. <br />
        I am empowered by teammates who feel the same way. <br />
    </p>
    <!-- <Sun/> -->
</Section>

<style lang="scss">
    h2 {
        margin-bottom: 0.5rem;

        // Maybe?
        /*
        &::first-letter {
            color: var(--bg-main);
            background-color: var(--t-main);
            border-radius: 0.2rem;
            padding-left: 0.2rem;
        }
        */
        
        @media (max-width: 768px) {
            text-align: left;
            font-size: 3rem;
            width: 550px;
            max-width: 90%;
        }
    }

    .text-content {
        font-size: x-large;
        width: 525px;
        max-width: 90%;

        @media (max-width: 768px) {
        }
    }
</style>
