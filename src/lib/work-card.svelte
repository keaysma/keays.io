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

<div class="work-card">
    <hgroup>
        <h4>{name}</h4>
        <h5>{company}</h5>
        <h6>{time}</h6>
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

        h4 {
            font-size: x-large;
            line-height: 1.5rem;
        }

        h5 {
            font-size: medium;
        }

        h6 {
            font-size: small;
            text-decoration: underline dotted;
        }

        ul {
            list-style: disc;
            list-style-position: inside;
        }

        &:not(:last-of-type) {
            margin-bottom: 2em;
        }
    }
</style>
