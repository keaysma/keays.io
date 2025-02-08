<script lang="ts">
    import { currentProjectId, projects, type Project } from "$lib/store";

    let project: Project | null = null;
    currentProjectId.subscribe((val) => (project = projects[val]));
</script>

{#if project}
    <h3>{project.title}</h3>
    <p>{project.description}</p>
{:else}
    <p class="placeholder">Click on a card to learn more</p>
{/if}

<style lang="scss">
    h3 {
        font-size: 2rem;
    }

    h3 + p {
        font-size: small;
    }
</style>
