<script>
    import { currentProjectId, projects } from "$lib/store";

    let project;

    currentProjectId.subscribe((val) => (project = projects[val]));
</script>

{#if project}
    <div class="flex flex-col h-full gap-2">
        <h3 class="text-4xl">{project.title}</h3>
        {#if project.image }
            <img class="h-48 w-48" src={project.image} alt={project.title} />
        {/if}
        <p class="text-sm">{ project.description }</p>
    </div>
{:else}
    <div />
{/if}
