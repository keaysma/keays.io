<script lang="ts">
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import {
        faPython,
        faReact,
        faNodeJs,
        faJava,
        faRust,
        faGit,
        faJenkins,
        faAws,
        faDocker,
        faUnity,
    } from "@fortawesome/free-brands-svg-icons";

    import { certs, experiences } from "$lib/store";

    import Section from "$lib/Section.svelte";
    import WorkCard from "$lib/work-card.svelte";
    import CertCard from "$lib/cert-card.svelte";

    const skillIcons = [
        faPython,
        faReact,
        // NextJS
        faNodeJs,
        faJava,
        // Ruby
        faRust,
        // C++
        faGit,
        faJenkins,
        // Postgres
        // Mongo
        faAws,
        // GCP
        // K8s
        faDocker,
        faUnity,
    ];
</script>

<Section id="experience">
    <div
        class="relative md:w-9/12 px-4 md:px-0 mx-auto mb-8 flex flex-col items-start"
    >
        <h2>Skills</h2>
        <div
            class="h-px -mt-1 w-full"
            style="background-color: var(--t-main);"
        ></div>
        <div class="flex flex-row flex-wrap gap-4 my-4">
            {#each skillIcons as icon}
                <FontAwesomeIcon
                    {icon}
                    class="text-6xl"
                    style="color: var(--t-main);"
                />
            {/each}
        </div>
        <ul class="list-disc">
            <li>System Design and Implementation Execution</li>
            <li>Full Stack Web and Mobile Development, Responsive Design</li>
            <li>Continuous Integration and End-to-End Test Automation</li>
            <li>Cross Functional Team Work</li>
            <li>Agile Development & Scrum</li>
        </ul>
    </div>
    <div
        class="relative md:w-9/12 px-4 md:px-0 mx-auto mb-8 flex flex-col items-start"
    >
        <h2>Work</h2>
        <div
            class="h-px -mt-1 w-full"
            style="background-color: var(--t-main);"
        ></div>
        <div class="flex flex-col gap-8 my-4">
            {#each experiences as experience}
                <WorkCard {...experience} />
            {/each}
        </div>
    </div>
    <div
        class="relative md:w-9/12 px-4 md:px-0 mx-auto flex flex-col items-start"
    >
        <h2>School & Certs</h2>
        <div
            class="h-px -mt-1 w-full"
            style="background-color: var(--t-main);"
        ></div>
        <div class="flex flex-col w-full items-center gap-8 my-4 py-6">
            {#each certs as cert}
                <CertCard {...cert} />
            {/each}
        </div>
    </div>
</Section>

<style>
</style>
