"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        In 2022 I finished a Bachelor of Music in Jazz Saxophone from HKU
        Utrecht and in 2024 I finished my Bachelor's degree in Computer Science
        at the <span className="font-medium">University of Utrecht</span>.{" "}
        <span className="italic">With a broad range of interests</span> and a
        profound passion for technology and music, I constantly seek out
        challenging projects that allow me to leverage my creative thinking and
        technical skills to develop innovative solutions. My expertise
        encompasses both front-end and back-end development, with a focus on{" "}
        <span className="font-medium transition hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400 hover:bg-clip-text hover:text-transparent">
          React (Next.js),
        </span>{" "}
        <span className="font-medium transition hover:bg-gradient-to-r hover:from-green-700 hover:to-green-400 hover:bg-clip-text hover:text-transparent">
          Android (Kotlin)
        </span>{" "}
        and{" "}
        <span className="font-medium transition hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
          .NET
        </span>
        .
      </p>

      <p>
        In my free time I'm usually making music 🎷, climbing boulders or riding
        my bike.
      </p>
    </motion.section>
  );
}
