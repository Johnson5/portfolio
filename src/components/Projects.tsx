"use client";

import { projectsData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import React, { useEffect, useRef } from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const ref = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
