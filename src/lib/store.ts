import { writable } from "svelte/store";

export const currentProjectId = writable<number>(undefined);

export interface Project {
  hidden?: boolean;
  title: string;
  brief: string;
  description: string;
  links?: {
    labelOverride?: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "keays.io",
    brief: "You are here!",
    description: "This is... this! I like to redo this site every few years to practice my skills and learn new things. The first iteration was written using pure HTML & jQuery. The second was written in <strong>React</strong>, using the <strong>Preact</strong> framework, and the current iteration is written using <strong>SvleteKit</strong>. The latest iteration to this is still using SvelteKit, but I have focused on CSS and JavaScript minimalism: Turning out a majority of the original 3rd party tools for as much pure HTML & CSS as possible, and upgrading to Svelte 5 while using <strong>Vite</strong> and <strong>Deno</strong>.",
    links: [
      {
        href: "https://github.com/keaysma/keays.io",
      },
    ],
  },
  {
    title: "fiarfli.art",
    brief: "My fiance's portfolio! ",
    description: "This is an ongoing collaborative project between the two of us. Changes are typically made on a monthly basis. The frontend is written in <strong>Vue</strong>, managed using <strong>AstroJS</strong>, and hosted on <strong>Vercel</strong>. I designed an admin dashboard which my girlfiend uses to upload art and links, which then go to a <strong>Rails</strong>-based admin service. The admin service is hosted on <strong>fly.io</strong>, and it handles files compression, thumbnail generation, repacking of images into the WEBP format, and git commits when updates are submitted. The data store for the art and descriptions is the github repo itself!",
    links: [
      {
        href: "https://fiarfli.art",
      },
    ],
  },
  {
    title: "GigNote",
    brief: "A webplatform for amature musicians - Built by musicians, for musicians.",
    description: "This is the biggest project I've ever worked on. GigNote is built using <strong>NextJS</strong> on the frontend, and two service, written in <strong>Flask</strong> and <strong>ExpressJS</strong> respectively, on the backend. The datastore is <strong>MongoDB</strong>, and the site is hosted on a blend of <strong>Vercel</strong> (Frontend), <strong>fly.io</strong> (Backend), and <strong>Atlast</strong> (Database). All of the services where once hosted on <strong>Heroku</strong>, but we migrated when they got rid of their free tier. With my Co-lead, we are a team of 4 people working on this project: 2 software engineers, 1 designer and 1 entrepeneur.",
    links: [
      {
        href: "https://gignote.io",
      },
    ],
  },
  {
    hidden: true,
    title: "Etude",
    brief: "A real-time chat service that integrates with GigNote",
    description: "",
    links: [
      {
        href: "https://gignote.io",
      },
    ],
  },
  {
    title: "ArtifactsMMO Client",
    brief: "This is my first Go project!",
    description: "<a href='https://artifactsmmo.com/' target='_blank'>ArtifactsMMO</a> is an MMO where the primary means to play the game is by making REST requests directly to the game server. Players are encouraged to write bots to control up to 5 characters. I maintain a client written in <strong>Golang</strong>, which has a terminal based GUI and facilitates both basic interaction with the game API, as well as some more advanced strategies via state machines called 'command generators'. The game also features a market trade system that I have been writing a small engine for. That market engine uses a <strong>SQLite</strong> database to store regularly compiled market information.",
    links: [
      {
        href: "https://github.com/keaysma/artifactsmmo.com",
      },
    ],
  },
  {
    title: "Today.",
    brief: "A todo list with just the stuff I want.",
    description: "I got really frustrated with how I can't find a todo app the does <i>exactly</i> what I want, so, I built my own. Checklists and entries (whether a checkbox is checked, or stricken) and searched using a robus system of tags. This is a pretty simple service that I find gives me some good day-to-day utility. I built the frontend for this service using <strong>Nuxt</strong>, and the backend using the <strong>Nimble</strong> language. All of the data is stored in a small <strong>Postgres</strong> database. The frontend is hosted using <strong>Vercel</strong>, while both the database and backend are hosted on <strong>fly.io</strong>.",
    links: [
      {
        href: "https://today.keays.io",
      },
      {
        labelOverride: "Repo (Frontend)",
        href: "https://github.com/keaysma/today-web",
      },
      {
        labelOverride: "Repo (Backend)",
        href: "https://github.com/keaysma/today-server",
      }
    ],
  },
  {
    title: "BlueSky PDS Tutorial",
    brief: "This is a quick write-up I did on how to host a blueksy PDS for free",
    description: "The team behind the Personal Data Server (PDS) used for BlueSky share their open-sourced code on GitHub, <a href='https://github.com/bluesky-social/pds' target='_blank'>here</a>. This repo's README comes with instructions for hosting the services via a docker-compose, and is designed to be run locally by any typical power user. I have taken their setup and converted it into a tutorial for hosting a PDS on <strong>fly.io</strong>. The benefit of running this way is that you don't need to guarantee uptime for your own hardware, and, it's free (fly.io does not collect bills under $5)!",
    links: [
      {
        href: "https://github.com/keaysma/pds-fly.io-template",
      },
    ],
  },
  {
    title: "ATProto Polls Proposal",
    brief: "Polls in BlueSky (maybe? we'll see)",
    description: "An open-source project I am looking to controbute too. ATProto is the network protocol that powers BlueSky. This is a schema I am proposing for single, multi, and soon, ranked-choice polls in BlueSky. If this does move forward, it may become the system for allowing user polls!",
    links: [
      {
        labelOverride: "GitHub Pull Request",
        href: "https://github.com/bluesky-social/atproto/pull/3298",
      },
      {
        labelOverride: "GitHub Issue",
        href: "https://github.com/bluesky-social/atproto/discussions/1310",
      },
    ],
  },
  {
    title: "My RSS App",
    brief: "A small, mostly in-browser, RSS feed reader",
    description: "Kind-of like my app 'Today.', this is inspired by me looking to put together a very particular set of features for a fairly simple task. This time, I'm also using this project to also build up my skills with some browser APIs that I find interesting. This project is written using <strong>SvelteKit</strong>, and features an in-browser database powered by <strong>SQLite</strong>. I also plan to put together a <strong>Service Worker</strong> to handle feed polling updates when the tab is unloaded. CORS ultimately does prevent this application from being fully in browser, so there's a small backend (using SvelteKit still) that handles resource proxying.",
    links: [
      {
        href: "https://github.com/keaysma/rss-app",
      },
    ],
  },
  {
    title: "sheeta.dog",
    brief: "Real time in-browser game",
    description: "This is a silly little where you run around as a french bulldog, jumping around on couches, barking, and leaving your mark in the world 😂. All of the game dev I have done in the past has been using a game engine, usually Unity. I decided that for a change, I wanted to build a game without an engine, instead, opting to use some of my web-dev skills to put something together from scratch. The game itself is rendered using <strong>three-js</strong>, and the frontend is built using <strong>SvelteKit</strong>. The backend is a socket-based <strong>TypeScript</strong> service that is run using <strong>Bun.JS</strong>. I designed the backend to be horizontally scalable by interacting with <strong>Redis</strong> as a pub/sub. The model of the frenchie was made by my lovely fiance!",
    extra: "<br><br>I have been able to play real-time with some friends for a laugh, and even had the chance to test out how well the real-time works while half-way across the world in Tokyo! The website is named after my dog, <a href='/sheeta.jpg' target='_blank'>sheeta</a>, but it is currently down, though, I need to renew/re-buy the domain.",
    links: [
      {
        href: "https://sheeta.dog",
      },
      {
        href: "https://github.com/keaysma/sheeta.dog",
      },
    ],
  },
  {
    hidden: false,
    title: "X-Bar",
    brief: "Langustics syntax decomposition tool",
    description: "I built this while studying linguistics at Mason. I was inspired by <a href='https://www.integral-calculator.com/' target='_blank'>integral-calculator</a> when I created this. The idea was to create an similarly useful tool for linguistic students to quickly prototype and validate syntax trees. I typically only work on this tool for maybe 1-2 weeks out of the year, making improvements based on different things I have learned. The original prototype was written in a Jupyter Notebook, which I later converted into a Flask server hosted on Heroku (RIP, have not put it back up yet). As part of the web-based transition, I worked on performance optimizations that brought the average compute time for a sentence down from 30 seconds to about 1/1000 of a second. Currently I'm preparing to put it back online as a pair of domain-driven services written in Rust and Python, with a frontend in ... I haven't decided yet!",
    links: [
      {
        labelOverride: "Project Website (dead link)",
        href: "https://syntax.keays.io",
      },
      {
        href: "https://github.com/keaysma/CompLing",
      },
    ],
  },
  {
    title: "GoComputeMe",
    brief: "Using WebAssembly for democratized workload distrobution.",
    description: "This was an experiment I did for a hackathon in 2020. The idea is that someone can get help with computationally intensive tasks from strangers on the internet, and the strangers on the internet get paid to help. People who want help through the service submit code in C++/Rust/anything that can compiled into <strong>webassembly</strong>. Helpers then download and run the webassembly with inputs they get from a central server. I had a lot of fun learning about webassembly through the course of this project. I'm not actively working on this project any more.",
    links: [
      {
        href: "https://github.com/keaysma/GoComputeMe",
      },
    ],
  },
  {
    title: "UtilityOS",
    brief: "A bootloader and rudamentary operating system designed for 32-bit machines",
    description: "I wrote it entirely in x64 assembly. This project was largely how I got familiar with low level and OS concepts. I've paused working on it indefinitely, but, would like to come back to it with fresh eyes someday.",
    links: [
      {
        href: "https://github.com/keaysma/UtilityOS",
      },
    ],
  },
  {
    hidden: true,
    title: "Cookr",
    brief: "Basically Madlibs for cooking, in an app.",
    description: "This was a fun little app I made during my college days. Originally I spun this up as an Android-only mobile app. That was a few years ago, and since then, Google took it down because it didn't have a privacy policy :(. I took some time to make another version of it in C++ a while back while getting familiar with the language. Cookr is one of my go-to 'hello world' projects, I'll likely re-implement it several times in the future.",
    links: [
      {
        href: "https://github.com/keaysma/cookr",
      },
    ],
  },
  {
    hidden: true,
    title: "rusty-calc",
    brief: "",
    description: "Kinda didn't want to share this one... It's the first thing I ever wrote in Rust. It was fun to work on, and I learned a lot, both about Rust, but also Github automation along the way. The quality here is pretty lacking. This is a project I consider done, I don't plan on working on it anymore.",
    links: [
      {
        href: "https://github.com/keaysma/rusty-calc",
      },
    ],
  },
].filter(({ hidden }) => !hidden)

export interface Experience {
  name: string;
  company: string;
  time: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    name: "Software Engineer, Operations",
    company: "Pattern Research",
    time: "March 2023 - Present",
    points: [
      "Planned, developed, implementend and maintained services written in Rust, Python, and Vue",
      "Services I worked on are used for Market and Trading analysis, as well as inter-exchange account transfers that range up to $1M USD per day",
      "Development and maintenance of development and deployment CI, as well as production infrastructure hosted on EKS",
      "Working with internal end users to build short term features, and prepare a long term firm vision for our services",
      "Took a lead role in compute resource cost management, as well as engineer mentorship and time management"
    ],
  },
  {
    name: "Full Stack Software Engineer",
    company: "Unit21",
    time: "February 2022 - March 2023",
    points: [
      "Designed and implemented features for fraud identification and case management solutions",
      "Designed, implemented, and maintained a number of microservices, with attention to security, performance at scale, and maintainability",
      "Co-lead a redesign, and implementation of our government reporting pipeline, shipped with issue detection and performance monitoring",
      "Triaging and resolving urgent customer issues, particularly regarding data integrity",
      "Leading cross-team coordination to ensure good customer communication and careful problem resolution",
    ],
  },
  {
    name: "Senior Quality Engineer",
    company: "MicroStrategy",
    time: "August 2019 - February 2022",
    points: [
      "Designed and executed performance test suites focused on multiple core MSTR server functionalities",
      "Designed and and implemtended automated test pipelines for stability, security, and functionality tests",
      "Developed and maintained end-to-end security automation for TLS functionality for a large range of different operating systems",
      "Maintained existing testing infrastructure in company-wide CI/CD pipelines",
    ],
  },
  {
    name: "Undergraduate Researcher",
    company: "George Mason University",
    time: "June 2018 - April 2019",
    points: [
      "Research in Autonomous Vehicle Integration and Design, as well as modern vehicle safety",
      "Designed and developed Open Dataset Labeling Software",
      "Research and education in modern data mining techniques for vehicle classification",
    ],
  },
  {
    name: "Lead Afterschool Teacher",
    company: "Stem ExCEL",
    time: "April 2016 - August 2018",
    points: [
      "Taught elementary and middle school children skills in computer game design, programming, and electrical engineering",
    ],
  },
];

export interface Cert {
  name: string;
  company: string;
  time: string;
  description?: string;
  image: string;
  imageAdditionalClass?: string;
  href: string;
}

export const certs: Cert[] = [
  {
    name: "Certified Kubernetes Application Developer",
    company: "The Linux Foundation",
    time: "January 2022 - January 2025",
    image: "https://images.credly.com/size/680x680/images/cc8adc83-1dc6-4d57-8e20-22171247e052/blob",
    href: "https://www.credly.com/badges/201bb205-dd47-4730-bf18-06c6945e8c80?source=linked_in_profile",
    // description: "Covered a lot of what I use today. Did NOT teach me how to fix flailing EC2 instances, real life taught me that...",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    time: "October 2020 - October 2023",
    image: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    href: "https://www.credly.com/badges/7d73c9f1-deed-42f3-a096-87e586feafcb?source=linked_in_profile",
  },
  {
    name: "Computer Science, B.S., Linguistics Minor",
    company: "George Mason University",
    time: "August 2015 - May 2019",
    image: "/GMU_Logo.jpg",
    imageAdditionalClass: "image-full",
    // image: "/George_Mason_University_logo.png",
    // imageAdditionalClass: "image-full-white",
    href: "",
    // description: "This is where I learned how to do database joins!",
    description: "Studied ethical hacking, operating systems, physics, statistics, and, machine learning. Graduated with a 3.8.",
  },
  {
    name: "International Baccalaureate Diploma Program",
    company: "George C. Marshall Highschool",
    time: "August 2011 - May 2015",
    image: "/International_Baccalaureate_Logo.png",
    imageAdditionalClass: "bg-circle",
    href: "",
    description: "High School curriculum with collegant elements. If you're familiar with AP, it's somewhat similar, but, with a greater focus on international studies, and requires a thesis. I did mine on the E-Voting system in Estonia in 2015.",
  },
];
