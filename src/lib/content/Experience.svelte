<script lang="ts">
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import {
        faPython,
        faGolang,
        faReact,
        faNodeJs,
        faJava,
        faRust,
        faAws,
        faDocker,
        faUnity,
    } from "@fortawesome/free-brands-svg-icons";
    import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

    import { certs, experiences } from "$lib/store";

    import Section from "$lib/Section.svelte";
    import WorkCard from "$lib/work-card.svelte";
    import CertCard from "$lib/cert-card.svelte";

    import typescript from "$lib/icons/typescript.svg?raw";
    import vue from "$lib/icons/vue.js.svg?raw";
    import postgres from "$lib/icons/postgres.svg?raw";
    import svelte from "$lib/icons/svelte.svg?raw";
    import kubernetes from "$lib/icons/kubernetes.svg?raw";
    import eks from "$lib/icons/eks.svg?raw";

    type Icon =
        | {
              type: "fa";
              icon: IconDefinition;
          }
        | {
              type: "raw";
              icon: string;
              alt: string;
          };
    const icons: Icon[] = [
        { type: "fa", icon: faPython },
        { type: "fa", icon: faGolang },
        { type: "fa", icon: faRust },
        { type: "fa", icon: faJava },
        { type: "raw", icon: typescript, alt: "typescript" },
        { type: "fa", icon: faNodeJs },
        { type: "fa", icon: faReact },
        { type: "raw", icon: vue, alt: "Vue.Js" },
        { type: "raw", icon: svelte, alt: "Svelte" },
        { type: "raw", icon: postgres, alt: "postgres" },
        { type: "fa", icon: faDocker },
        { type: "raw", icon: kubernetes, alt: "K8s" },
        { type: "raw", icon: eks, alt: "EKS" },
        { type: "fa", icon: faAws },
        { type: "fa", icon: faUnity },
    ];
</script>

<Section id="experience" format="block">
    <h2 class="bar">Skills & Tech</h2>
    {#each icons as { type, icon, ...details }}
        {#if type === "fa"}
            <figure>
                <FontAwesomeIcon {icon} class="svg-lg" />
                <figcaption>
                    <i>{(icon as IconDefinition).iconName}</i>
                </figcaption>
            </figure>
        {:else}
            <figure>
                {@html icon}
                <figcaption>{(details as { alt: string }).alt}</figcaption>
            </figure>
        {/if}
    {/each}
    <ul>
        <li>Feature & Project Ownership: Capacity Planning, Risk Assessment</li>
        <li>System Design, Implementation, and Execution</li>
        <li>Full Stack Web Dev: Responsive Design, Scalable Services, and Database Architecture</li>
        <li>Continuous Integration and End-to-End Test Automation</li>
        <li>Cross Functional Team Work</li>
    </ul>

    <h2 class="bar">Work</h2>
    {#each experiences as experience}
        <WorkCard {...experience} />
    {/each}

    <h2 class="bar">School & Certs</h2>
    <br /><br />
    {#each certs as cert}
        <CertCard {...cert} />
    {/each}
</Section>

<style lang="scss">
    h2 {
        /* This just provides a nice little bit of space when going to the #experiences header */
        /* Also, this provides spacing between the sub-sections nicely, too */
        padding-top: 3rem;
    }

    figure {
        display: inline-block;
        font-size: x-large;
        line-height: 1em;

        margin: 0.75rem 0 0.5rem;
        &:not(:last-of-type) {
            margin-right: 1rem;
        }

        figcaption {
            text-align: center;
            font-size: small;
            text-transform: capitalize;
        }
    }

    ul {
        list-style: disc;
        list-style-position: inside;
    }
</style>
