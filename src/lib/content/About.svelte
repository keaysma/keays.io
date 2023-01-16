<script>
    import DownLink from "$lib/down-link.svelte";
import Section from "$lib/Section.svelte";
    import Sun from "$lib/sun.svelte";
    import Title from "$lib/Title.svelte";
    import UpLink from "$lib/up-link.svelte";
</script>

<Section id="about">
    <div class="relative flex flex-col items-center gap-2">
        <UpLink title="home" href="/"/>
        <Title>Who is Michael?</Title>
        <p class="px-12 md:px-0 md:text-2xl md:w-[525px]">
            Purpose, Passion, Patience <br />
            Community, Collaboration, <br />
            Learning, Leading, <br /> <br />

            I like code, and web-dev. <br />
            I love solving challenging problems in new ways, and making a positive difference
            in the world. <br />
            I survive on a diet of <strike>coffee</strike> learning something new
            everyday. <br />
            I revel in the unknown, and the experimental. <br />
            I am empowered by teammates who feel the same way. <br />
        </p>
        <!-- <Sun/> -->
        <DownLink title="projects"/>
    </div>
</Section>
