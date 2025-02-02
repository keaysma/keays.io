<script lang="ts">
    import ProjectCard from "$lib/project-card.svelte";
    import Section from "$lib/Section.svelte";
    import Title from "$lib/Title.svelte";

    import { projects } from "$lib/store";
    import ProjectDisplay from "$lib/project-display.svelte";
    import UpLink from "$lib/up-link.svelte";
    import DownLink from "$lib/down-link.svelte";

</script>

<Section id="projects">
    <div class="relative md:w-11/12 lg:w-7/12 px-4 md:px-0 mx-auto flex flex-col items-start">
        <UpLink title="about" />

        <Title>Projects</Title>
        <div
            class="h-px -mt-1 w-full"
            style="background-color: var(--t-main);"
        ></div>
        <div class="flex flex-row w-full py-4 gap-4">
            <!-- List -->
            <ul class="w-full md:w-2/3 grid md:grid-cols-2 gap-2">
                {#each projects as project, i}
                    <ProjectCard id={i} {...project} />
                {/each}
            </ul>

            <!-- Display -->
            <div class="hidden md:block md:w-1/3">
                <ProjectDisplay/>
            </div>
        </div>

        <DownLink title="experience" />
    </div>
</Section>
