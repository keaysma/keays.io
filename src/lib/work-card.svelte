<script>
    export let name, company, time, points;
</script>

<div class="flex flex-col md:w-9/12">
    <h3 class="text-2xl md:text-4xl">{ name }</h3>
    <div class="flex flex-row items-end gap-2 font-bold">
        <h4>{ company }, { time }</h4>
    </div>
    <ul  class="text-sm list-disc">
        {#each points as point}
        <li>{ point }</li>
        {/each}
    </ul>
</div>