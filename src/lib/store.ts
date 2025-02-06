import { writable } from "svelte/store";

export const currentProjectId = writable<number>(undefined);

export interface Project {
  hidden?: boolean;
  title: string;
  href: string;
  brief: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "keays.io",
    href: "https://github.com/keaysma/keays.io",
    brief: "You are here!",
    description:
      "This website is about... me, and, I like to redo it every few years to practice my skills and learn new things. The first iteration was written using pure HTML & jQuery. The second was written in React, using the Preact framework, and the current iteration is written using SvleteKit.",
  },
  {
    title: "GigNote",
    href: "https://gignote.io",
    brief:
      "A webplatform for amature musicians - Built by musicians, for musicians.",
    description:
      "GigNote is an active project that gets daily updates. This is the biggest project I've ever worked on. GigNote is built using NextJS on the frontend, and two service, written in Flask and Express respectively, on the backend. The datastore is MongoDB, and the site is hosted on a blend of Vercel (Frontend), fly.io (Backend), and Atlast (Database). I am co-leading a team of 4 currently, which has played a key part in making the progress we have thus far possible.",
  },
  {
    title: "fiarfli.art",
    href: "https://fiarfli.art",
    brief: "My girlfriend's portfolio! ",
    description:
      "This is an ongoing collaborative effort, changes are typically made on a monthly basis. The frontend is written in Vue, managed using AstroJS, and hosted on Vercel. There's an admin dashboard which my girlfiend uses to upload art and links. The data store for the art and descriptions is the github repo! There's a service hosted on fly.io which handles automated image compression and git commits when updates are submitted.",
  },
  {
    title: "X-Bar",
    href: "https://syntax.keays.io",
    brief: "X-bar syntax decomposition tool.",
    description:
      "I built this while studying linguistics at Mason. I was inspired by integral-calculator when I created this. The idea was to create an equivalently useful tool for linguistic students to quickly prototype and validate their work. This project is still in development, but  I typically only work on it for maybe 1-2 weeks out of the year. The original prototype was written in a Jupyter Notebook, which I later converted into a Flask server hosted on Heroku (RIP). As part of the web-based transition, I worked on performance optimizations that brought the average compute time for a sentence down from 5 minutes to about 1/1000 of a second. Currently I'm preparing to put it back online as a pair of domain-driven services written in Rust and Python, with a frontend in ... I haven't decided yet!",
  },
  {
    title: "GoComputeMe",
    href: "https://github.com/keaysma/GoComputeMe",
    brief: "Using WebAssembly for democratized workload distrobution.",
    description:
      "This was an experiment I did for a hackathon in 2020. The idea is that someone can get help with computationally intensive tasks from strangers on the internet, and the strangers on the internet get paid to help. People who want help through the service submit code in C++/Rust/anything that can compiled into webassembly. Helpers then download and run the webassembly with inputs they get from a central server. I had a lot of fun learning about webassembly through the course of this project. It's not one I'm actively working on however.",
  },
  {
    title: "UtilityOS",
    href: "https://github.com/keaysma/UtilityOS",
    brief:
      "A bootloader and rudamentary operating system designed for 32-bit machines.",
    description:
      "I wrote it entirely in x64 assembly. This project was largely how I got familiar with low level and OS concepts. I've paused working on it indefinitely, but, would like to come back to it with fresh eyes someday.",
  },
  {
    title: "Toodo",
    href: "https://toodo.keays.io",
    brief: "A todo list with just the stuff I want.",
    description:
      "I got really frustrated with how I can't find a todo app the does *exactly* what I want, so, I have put together plans to build my own. This is on my... todo list, I haven't started putting down any code yet, just planning. For the frontend, I'm planning on building this in Svelte as a means of building up my understanding of the framework's data management and API request tools.",
  },
  {
    title: "Cookr",
    href: "https://github.com/keaysma/cookr",
    brief: "Basically Madlibs for cooking, in an app.",
    description:
      "This was a fun little app I made during my college days. Originally I spun this up as an Android-only mobile app. That was a few years ago, and since then, Google took it down because it didn't have a privacy policy :(. I took some time to make another version of it in C++ a while back while getting familiar with the language. Cookr is one of my go-to 'hello world' projects, I'll likely re-implement it several times in the future.",
  },
  {
    title: "rusty-calc",
    href: "https://github.com/keaysma/rusty-calc",
    brief: "",
    description:
      "Kinda didn't want to share this one... It's the first thing I ever wrote in Rust. It was fun to work on, and I learned a lot, both about Rust, but also Github automation along the way. The quality here is pretty lacking. This is a project I consider done, I don't plan on working on it anymore.",
  },
];

export interface Experience {
  name: string;
  company: string;
  time: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    name: "Full Stack Software Engineer",
    company: "Unit21",
    time: "February 2022 - Present",
    points: [
      "Designing and implementing case management solutions",
      "Designing, implementing, and maintaining several microservices, with attention to security, performance at scale, and maintainability",
      "Triaging and resolving urgent customer issues, particularly regarding data integrity",
    ],
  },
  {
    name: "Senior Quality Engineer",
    company: "MicroStrategy",
    time: "August 2019 - February 2022",
    points: [
      "Architecting and executing performance tests focused on multiple core server functionalities",
      "Designing and executing automated stability, security, and functionality tests",
      "Developing and maintaining security automation for native web systems",
      "Maintaining existing testing infrastructure in company-wide CI/CD pipelines",
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
      "Teaching elementary school-grade children skills in computer game design, programming, and electrical engineering",
    ],
  },
];

export interface Cert {
  name: string;
  company: string;
  time: string;
  description?: string;
  image: string;
  href: string;
}

export const certs: Cert[] = [
  {
    name: "Certified Kubernetes Application Developer",
    company: "The Linux Foundation",
    time: "January 2022 - January 2025",
    image:
      "https://images.credly.com/size/680x680/images/f88d800c-5261-45c6-9515-0458e31c3e16/ckad_from_cncfsite.png",
    href: "https://www.credly.com/badges/201bb205-dd47-4730-bf18-06c6945e8c80?source=linked_in_profile",
    description: "Covered a lot of what I use today. Did NOT teach me how to fix flailing EC2 instances, real life taught me that...",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    time: "October 2020 - October 2023",
    image:
      "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    href: "https://www.credly.com/badges/7d73c9f1-deed-42f3-a096-87e586feafcb?source=linked_in_profile",
  },
  {
    name: "Computer Science, B.S., Linguistics Minor",
    company: "George Mason University",
    time: "August 2015 - May 2019",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/George_Mason_Patriots_logo.svg/1200px-George_Mason_Patriots_logo.svg.png",
    href: "",
    description: "This is where I learned how to do database joins!",
  },
  {
    name: "International Baccalaureate Diploma",
    company: "George C. Marshall Highschool",
    time: "August 2011 - May 2015",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/International_Baccalaureate_Logo.svg/1200px-International_Baccalaureate_Logo.svg.png",
    href: "",
  },
];
