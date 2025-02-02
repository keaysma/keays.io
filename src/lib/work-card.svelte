<script lang="ts">
    let {
        name,
        company,
        time,
        points,
    }: {
        name: string;
        company: string;
        time: string;
        points: string[];
    } = $props();
</script>

<div class="flex flex-col md:flex-row w-full gap-x-8 gap-y-2 md:gap-y-0">
    <div
        class="flex flex-col md:w-3/12 md:text-right border-b md:border-b-0 md:border-r px-4 pb-2 md:pb-0"
        style="border-color: var(--t-main);"
    >
        <h4 class="text-2xl text-bold">{name}</h4>
        <h5 class="text-sm">{company}</h5>
        <h5 class="text-xs">{time}</h5>
    </div>
    <ul class="flex flex-col gap-2 md:w-9/12 px-4 md:px-0 list-disc">
        {#each points as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>
