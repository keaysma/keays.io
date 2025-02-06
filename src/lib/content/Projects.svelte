<script lang="ts">
    import ProjectCard from "$lib/project-card.svelte";
    import Section from "$lib/Section.svelte";

    import { projects } from "$lib/store";
    import ProjectDisplay from "$lib/project-display.svelte";
</script>

<Section
    id="projects"
    format="block"
    up={{ title: "about" }}
    down={{ title: "experience" }}
>
    <h2 class="bar">Projects</h2>
    <div class="projects-frame">
        <!-- List -->
        <ul class="projects-list">
            {#each projects as project, i}
                <ProjectCard id={i} {...project} />
            {/each}
        </ul>

        <!-- Display -->
        <div class="display-wrapper">
            <ProjectDisplay />
        </div>
    </div>
</Section>

<style lang="scss">
    .projects-frame {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 0.5em 0;
        gap: 1rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        > .projects-list {
            position: relative;
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }

        > .display-wrapper {
            display: block;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }
</style>
