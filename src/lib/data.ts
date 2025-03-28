import React from "react";
import { FaReact } from "react-icons/fa";
import cognitivemapr from "../../public/cognitivemapr.png";
import faenomenal from "../../public/faenomenal.png";
import { IoLogoJavascript } from "react-icons/io";
import { BsMusicNote } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";

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
    title: "Full-Stack Developer · NS",
    location: "Utrecht, NL",
    description: "As a Full Stack Developer, I work at NS (Dutch Railways) on the Wissel app, an Android app that helps our colleagues working on trains and stations. My work includes both the development of the app itself and the backend and cloud infrastructure. With this technology, we support the staff in their daily tasks and ensure they always have the most up-to-date information at their fingertips.",
    icon: React.createElement(FaAndroid),
    date: "2025 - present"
  },
  {
    title: "Junior Software Engineer · Sweco",
    location: "De Bilt, NL",
    description: "As a software developer in Sweco's Rail & Stations division, I designed and implemented cutting-edge software solutions to enhance railway infrastructure and station operations. Collaborating with multidisciplinary teams, I focus on optimizing system performance and ensuring seamless integration with existing technologies. My work contributes to creating efficient, sustainable, and user-friendly transport systems.",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
  {
    title: "Software Developer · CTA Consulting",
    location: "Veenendaal, NL",
    description:
      "I worked part-time at this job while finishing my bachelor's degree. My task was to build and maintain online platforms for different clients in the automotive and energy sector, working within the low-code platform InfiniteBlue. My activities included designing and implementing front-end pages, designing back-end architecture and connecting external services to our platforms via API's.",
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
  "Kotlin",
  "Android",
  "Azure",
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  ".NET",
  "TailwindCSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Figma",
] as const;
