"use client";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import Button from "./components/Button";
import { TypeAnimation } from 'react-type-animation';

/** 
 * This file contains the Home Page UI
*/

export default function Home() {
  return (
    <section className="space-y-16">
      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl text-center font-bold tracking-tight mt-75 mb-75">
          Hello, I'm Jeffery Achamfuor<br /> 
          <span className="text-2xl text-center font-bold tracking-tight"> </span>
          <TypeAnimation
            sequence={[
              "Computer Science Student",
              1000,
              "Software Developer",
              1000,
              "Web Developer",
              1000,
              "Full-Stack Developer",
              1000,
              "Problem Solver",
              1000,
              "Innovator",
              1000
            ]}
            wrapper="span"
            speed={30}
            className="text-2xl text-center font-bold tracking-tight text-glow"
            repeat={Infinity}
          />
        </h1>

        <div className="flex justify-center gap-4 pt-4 mb-25">
          <Button
            description="Download Resume"
            href="/Jeffery Achamfuor's CV.pdf"
            variant="glow"
            external
          />
          <Button
            description="GitHub"
            href="https://github.com/Jachamfuor"
            variant="glow"
            external
          />
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="bg-neutral-200/5 rounded-md ">
        <h1 className="text-2xl font-mono font-semibold text-center">About Me</h1>
        <p className="text=lg text-center text-gray-600 max-w-5xl mb-25">
          Computer Science student at Virginia Tech with hands-on experience in data structures, AI, systems programming, and
          human-centered security research, seeking a Summer 2026 software engineering internship.
        </p>
      </div>



      {/* FEATURED PROJECTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Self-Updating Portfolio"
            description="A portfolio that automatically updates using GitHub data, CI/CD, and automation."
            techs={["Next.js", "TypeScript", "GitHub Actions"]}
            href="https://github.com/Jachamfuor/personal-portfolio"
          />

          <ProjectCard
            title="(Your Other Project)"
            description="Short, clear description of what problem it solves."
            techs={["Java", "Data Structures", "Algorithms"]}
            href="#"
          />
        </div>


        <Link
          href="/projects"
          className="inline-block text-sm underline"
        >
          View all projects →
        </Link>
      </div>

      {/* SKILLS */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <h2 className="font-mono font-semibold">My arsenal for building applications</h2>

        <ul className="grid gap-2 text-gray-700 sm:grid-cols-1">
          <SkillCard
          title="Languages"
          skills={["Java", "Python", "C", "TypeScript"]}
          />

            <SkillCard
          title="Frameworks"
          skills={["React", "Next.js"]}
          />

          <SkillCard
          title="Tools"
          skills={["GitHub", "GitHub Actions", "Linux"]}
          />

          <SkillCard
          title="Concepts"
          skills={["Data Structures and Algorthims", "Systems", "Artfical Intellegence", "Automation"]}
          />
        </ul>
      </div>

      {/* CTA */}
      <div>
        <Link
          href="/contact"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Let's Connect →
        </Link>
      </div>
    </section >
  );
}

