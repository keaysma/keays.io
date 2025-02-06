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

<Section id="experience" format="block">
    <h2 class="bar">Skills & Tech</h2>
    {#each skillIcons as icon}
        <FontAwesomeIcon {icon} class="skill" />
    {/each}
    <ul>
        <li>System Design and Implementation Execution</li>
        <li>Full Stack Web and Mobile Development, Responsive Design</li>
        <li>Continuous Integration and End-to-End Test Automation</li>
        <li>Cross Functional Team Work</li>
        <li>Agile Development & Scrum</li>
    </ul>

    <h2 class="bar">Work</h2>
    {#each experiences as experience}
        <WorkCard {...experience} />
    {/each}

    <h2 class="bar">School & Certs</h2>
    <br><br>
    {#each certs as cert}
        <CertCard {...cert} />
    {/each}
</Section>

<style>
    h2 {
        /* This just provides a nice little bit of space when going to the #experiences header */
        /* Also, this provides spacing between the sub-sections nicely, too */
        padding-top: 1em;
    }

    ul {
        list-style: disc;
        list-style-position: inside;
    }
</style>
