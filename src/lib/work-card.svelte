<script lang="ts">
    import type { Experience } from "./store";

    let { name, company, time, points }: Experience = $props();
</script>

<div class="work-card">
    <hgroup>
        <h3>{name}</h3>
        <h4>{company}</h4>
        <h5>{time}</h5>
    </hgroup>
    <ul>
        {#each points as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .work-card {
        display: block;
        padding: 0.5rem 0 0 0;

        ul {
            list-style: disc;
            list-style-position: inside;
        }

        &:not(:last-of-type) {
            margin-bottom: 2rem;
        }
    }
</style>
