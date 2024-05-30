import React from "react";
import { FaReact } from "react-icons/fa";
import cognitivemapr from "../../public/cognitivemapr.png";
import faenomenal from "../../public/faenomenal.png";
import { IoLogoJavascript } from "react-icons/io";
import { BsMusicNote } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Engineer · Sweco",
    location: "Utrecht, NL",
    description: "",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Software Developer · CTA Consulting",
    location: "Veenendaal, NL",
    description:
      "Build and maintain online platforms for different clients in the automotive and energy sector, working within the low-code platform InfiniteBlue. My activities included designing and implementing front-end pages, designing back-end architecture and connecting external services to our platforms via API's.",
    icon: React.createElement(IoLogoJavascript),
    date: "2022 - 2024",
  },
  {
    title: "Freelance Musician",
    location: "Utrecht, NL",
    icon: React.createElement(BsMusicNote),
    date: "2019 - present",
    description:
      "Teaching private saxophone lessons and performing with a variety of bands and ensembles on parties and other events.",
  },
] as const;

export const projectsData = [
  {
    title: "CognitiveMapr",
    description:
      "Cognitive Mapping web-app created for the final project of the Bachelor of Science at Utrecht University. Built with Vue.js in a team of 8 students.",
    tags: ["Vue.js", "Nuxt", "TypeScript", "SASS", "NginX"],
    imageUrl: cognitivemapr,
    pageUrl: "https://www.cognitivemapr.nl",
  },
  {
    title: "faenomenal.nl",
    description:
      "Personal website made for a content creator where she can share recipes, blog posts, video's and more.",
    tags: ["Wordpress", "Javascript", "HTML", "CSS"],
    imageUrl: faenomenal,
    pageUrl: "https://www.faenomenal.nl",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  ".NET",
  "HTML",
  "CSS",
  "Node.js",
  "TailwindCSS",
  "Python",
  "Framer Motion",
  "Git",
  "GitHub",
  "Figma",
] as const;
