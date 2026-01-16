"use client";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ExpCard from "./components/ExpCard";
import ExperienceImgCard from "./components/ExperienceImgCard"
import Button from "./components/Button";
import Bubble from "./components/TextBubbles";
import { Code2, Monitor, Wrench, Lightbulb, Github, Linkedin, Mail, DownloadIcon, GraduationCapIcon, School2Icon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import CarouselRow from "./components/CarouselRow";
import { useState } from "react";
import MatrixIntro from "./components/MatrixIntro";
import activity from "@/data/activity.json"
import CardShell from "./components/CardShell";
import { ImageTile } from "./components/ImageTile";
import { GradientTile } from "./components/GradientTile";



/** 
 * Home Page UI
*/

function timeAgo(iso: string) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - then) / 1000));

  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay}d ago`;
}

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <MatrixIntro onAnimationComplete={() => setIntroFinished(true)} />
      )}
      <main className={introFinished ? "opacity-100" : "opacity-0"}>

        <section className="space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
          {/* HERO */}
          <div className="space-y-6 sm:space-y-8 text-center">
            <header className="text-4xl sm:text-5xl font-bold tracking-tight mt-50 mb-60">
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
                wrapper="div"
                speed={30}
                className="text-xl sm:text-2xl text-center font-bold tracking-tight text-glow"
                repeat={Infinity}
              />
            </header>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
              <Button
                href="/Jeffery Achamfuor's CV.pdf"
                variant="glow"
                external
              ><DownloadIcon size={18} />Resume</Button>
              <Button
                href="https://github.com/Jachamfuor"
                variant="glow"
                external
              >
                <Github size={18} />
                Github
              </Button>


            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className=" glass-bg space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 space-y-6">
            <header className="text-2xl font-semibold">Featured Projects</header>

            <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
              <ProjectCard
                title="(Your Other Project)"
                description="Short, clear description of what problem it solves."
                techs={["Java", "Data Structures", "Algorithms"]}
                href="#"
              />

              <ExperienceImgCard
                img="./waves.jpg"
                imgDscp="Waves"
                title="Self-Updating Portfolio"
                description="A portfolio that automatically updates using GitHub data, CI/CD, and automation."
                techs={["Next.js", "TypeScript", "GitHub Actions"]}
                href="https://github.com/Jachamfuor/personal-portfolio"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200/30 pt-" />

            {/* Latest from GitHub */}
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <h3 className="text-lg font-medium">Latest from GitHub</h3>
                <p className="text-xs tile-muted hidden sm:block">
                  Updated {timeAgo(activity.generatedAt)} | {" "} {new Date(activity.generatedAt).toLocaleString()}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <CardShell className="pb-4">
                  <h4 className="font-semibold mb-3">Recent commits</h4>
                  <ul className="space-y-2 text-sm">
                    {activity.recentCommits?.length ? (
                      activity.recentCommits.slice(0, 5).map((c: any) => (
                        <li key={`${c.repo}-${c.sha}`}>
                          <div className="text-xs tile-muted">{c.repo}</div>
                          {c.url ? (
                            <a className="underline" href={c.url}>
                              {c.message}
                            </a>
                          ) : (
                            <span>{c.message}</span>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>No recent commits.</li>
                    )}
                  </ul>
                </CardShell>

                <CardShell className="pb-4">
                  <h4 className="font-semibold mb-3">Updated repositories</h4>
                  <ul className="space-y-3 text-sm">
                    {activity.recentRepos?.length ? (
                      activity.recentRepos.slice(0, 5).map((r: any) => (
                        <li key={r.fullName}>
                          <a className="underline font-medium" href={r.url}>
                            {r.name}
                          </a>
                          <div className="tile-muted">{r.description}</div>
                          <div className="text-xs">
                            {r.language || "—"} · ★ {r.stars}
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>No repos found.</li>
                    )}
                  </ul>
                </CardShell>
              </div>

              <Link
                href="/projects"
                className="inline-block text-sm underline"
              >
                View all projects →
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-xl font-medium">Experience</h2>
              <p className=" aligned text-sm tile-muted hidden sm:block">
                Selected roles · real responsibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[190px] lg:auto-rows-[200px] grid-auto:dense">
              {/* Big editorial */}
              <div className="md:col-span-7 md:row-span-2">
                <GradientTile
                  title="Experience built through responsibility"
                  subtitle="Hands-on roles spanning research, data, and professional environments."
                  tag="All Experiences"
                  className="h-full"
                />
              </div>

              {/* Big image */}
              <div className="row-span-2 md:col-span-5 md:row-span-2">
                <ImageTile
                  label="Research · Data · Systems"
                  className="h-full"
                  src="/waves.jpg"
                />
              </div>

              {/* Image tile */}
              <div className="row-span-2 md:col-span-4 md:row-span-2">
                <ImageTile
                  label="Professional Environment"
                  className="h-full"
                  src="/waves.jpg"
                />
              </div>

              {/* Research Assistant */}
              <div className="row-span-2 md:col-span-4 md:row-span-2">


                <ExpCard
                  role="Research Assistant"
                  job="REACH Human-Computer Interaction Lab · Blacksburg, VA"
                  time="August 2025 – December 2025"
                  description="Conducted human-centered security research focused on how users detect and respond to suspicious activity across cultural and generational contexts. Supported qualitative research workflows including literature reviews, participant coordination, protocol refinement, and ethical data collection, contributing to over 50 research artifacts and analyses."
                  skills={[
                    "Qualitative Research",
                    "Interviewing",
                    "Data Analysis",
                    "Research Ethics",
                    "Technical Writing",
                    "Collaboration",
                  ]}
                />
              </div>

              {/* Signals */}
              <div className="md:col-span-4 md:row-span-2">
                <GradientTile
                  title="What you can count on"
                  subtitle="Ownership · Consistency · Problem-solving · Clear Communication · Data Accuracy · Fast Learner · Reliable Execution"
                  tag="Signals"
                  className="h-full"
                />
              </div>

              {/* Data Analyst Intern */}
              <div className="row-span-2 md:col-span-4 md:row-span-2">
                <ExpCard
                  role="Data Analyst Intern"
                  job="Onwe Hospital · Onwe, Ghana, West Africa"
                  time="June 2022"
                  description="Led the digitization of patient record systems, improving data accuracy and reducing manual paperwork for over 300 patients. Optimized database organization and retrieval workflows to significantly improve operational efficiency for medical staff. Gained hands-on experience applying data-driven solutions in a real-world healthcare setting."
                  skills={[
                    "Data Analysis",
                    "Database Optimization",
                    "Data Cleaning",
                    "Process Improvement",
                    "Microsoft Excel",
                    "Problem Solving",
                  ]}
                />
              </div>

              {/* Test Proctor */}
              <div className="row-span-2 md:col-span-4 md:row-span-2">
                <ExpCard
                  role="Test Proctor"
                  job="Virginia Tech · Services for Students with Disabilities · Blacksburg, VA"
                  time="August 2025 – Present"
                  description="Administer exams for students with approved accommodations while ensuring academic integrity, accessibility, and confidentiality. Developed strong attention to detail, professionalism, and communication skills while working within structured academic policies."
                  skills={[
                    "Professional Communication",
                    "Attention to Detail",
                    "Time Management",
                    "Confidentiality",
                    "Policy Adherence",
                  ]}
                />
              </div>

              {/* Personal Assistant */}
              <div className="row-span-2 md:col-span-4 md:row-span-2">
                <ExpCard
                  role="Personal Assistant"
                  job="Corporate Marketing Executive · Vacaville, CA"
                  time="June 2025 – August 2025"
                  description="Provided administrative and organizational support in a fast-paced professional environment, managing schedules, coordinating logistics, and assisting with task prioritization. Built strong organizational habits and learned how to operate effectively under shifting priorities."
                  skills={[
                    "Organization",
                    "Time Management",
                    "Professional Communication",
                    "Task Prioritization",
                    "Adaptability",
                  ]}
                />
              </div>

              {/* Banner */}
              <div className="md:col-span-12 md:row-span-1">
                <GradientTile
                  title="Growing into stronger engineering"
                  subtitle="Every role strengthened how I think, document, and deliver."
                  tag="Overview"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="w-full glass-bg  space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 space-y-6 ">
            <header className="text-2xl font-semibold">Skills</header>
            <p className="font-mono font-semibold text-muted">
              My arsenal for building applications
            </p>

            <ul className="grid gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <SkillCard
                title="Languages"
                icon={Code2}
                skills={["Java", "Python", "C", "JavaScript/TypeScript", "SQL", "x86 Assembly", "MATLAB"]}
              />

              <SkillCard
                title="Frontend CHANGE"
                icon={Monitor}
                skills={["React", "Next.js", "Tailwind CSS"]}
              />

              <SkillCard
                title="Tools"
                icon={Wrench}
                skills={["Git", "GitHub", "GitHub Actions", "Linux", "Docker", "Visual Studio Code", "Eclipse", "React.js", "Github API", "Solidworks"]}
              />

              <SkillCard
                title="Capabilities FILL LATER"
                icon={Lightbulb}
                skills={["Data Structures and Algorthims", "Software Design", "Systems", "Artfical Intellegence", "Automation"]}
              />
            </ul>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-xl font-medium">Leadership</h2>
              <p className="text-sm tile-muted hidden sm:block">
                Consistency over time
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[190px] lg:auto-rows-[200px] grid-auto-flow:dense">

              {/* (1) Top-left: Intro gradient tile (short) */}
              <div className="row-span-1 md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-1">
                <GradientTile
                  title="Leadership built on trust."
                  subtitle="Roles centered on accountability, communication, and supporting others in real environments."
                  tag="Leadership History"
                  className="h-full"
                />
              </div>

              {/* (2) Top-middle: Board Member (tall) */}
              <div className="row-span-2 md:col-start-5 md:col-span-4 md:row-start-1 md:row-span-2">
                <ExpCard
                  role="Board Member"
                  job="Vêtement De Rue Fashion Organization · Blacksburg, VA"
                  time="August 2024 – Present"
                  description="Contribute to organizational strategy, event planning, and creative direction for a student-led fashion organization. 
            Support designers and foster a collaborative space centered on creativity, identity, and self-expression."
                  skills={["Strategic Planning", "Creative Direction", "Event Coordination", "Leadership", "Collaboration"]}
                />
              </div>

              {/* (3) Top-right: Image (short) */}
              <div className="row-span-1 md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-1">
                <ImageTile
                  label="Professional Environment"
                  className="h-full w-full"
                  src="/waves.jpg"
                />
              </div>

              {/* (4) Left big image (tall) */}
              <div className="row-span-3 md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-3">
                <ImageTile
                  label="Research · Data · Systems"
                  className="h-full w-full"
                  src="/waves.jpg"
                />
              </div>

              {/* (5) Right: Well-Being (tall) */}
              <div className="row-span-2 md:col-start-9 md:col-span-4 md:row-start-2 md:row-span-2">
                <ExpCard
                  role="Well-Being Resident Advisor - Blacksburg, VA"
                  job=""
                  time="December 2024 – June 2025"
                  description="Supported student well-being by fostering an inclusive residential community, providing peer support, and 
            connecting residents with campus resources. Strengthened interpersonal skills while addressing student needs with empathy and professionalism."
                  skills={["Mentorship", "Conflict Resolution", "Communication", "Community Building", "Emotional Intelligence"]}
                />
              </div>

              {/* (6) Middle: Signals gradient (short) */}
              <div className="row-span-1 md:col-start-5 md:col-span-4 md:row-start-3 md:row-span-1">
                <GradientTile
                  title="What my leadership reflects."
                  subtitle="Reliability · Empathy · Clear communication · Decision-making · Follow-through"
                  tag="Signals"
                  className="h-full"
                />
              </div>

              {/* (7) Middle: Peer Mentor (tall) */}
              <div className="row-span-2 md:col-start-5 md:col-span-4 md:row-start-4 md:row-span-2">
                <ExpCard
                  role="Peer Mentor"
                  job="Center for Engineering Excellence and Discovery - Blacksburg, VA"
                  time="August 2023 – June 2025"
                  description="Mentored engineering students through academic guidance, resource navigation, and peer support. Helped students transition 
            into college-level coursework while reinforcing study strategies and confidence in STEM disciplines."
                  skills={["Mentoring", "Academic Support", "Communication", "Leadership", "STEM Advocacy"]}
                />
              </div>

              {/* (8) Right: Banner gradient (short) */}
              <div className="row-span-1 md:col-start-9 md:col-span-4 md:row-start-4 md:row-span-1">
                <GradientTile
                  title="Leadership beyond titles."
                  subtitle="Showing up consistently, listening first, and taking responsibility when it matters."
                  tag="Approach"
                  className="h-full"
                />
              </div>

              {/* (9) Left: Values */}
              <div className="row-span-1 md:col-start-1 md:col-span-4 md:row-start-5 md:row-span-1 bg-amber-600/60 rounded-3xl overflow-hidden">
                <GradientTile
                  title="Values I lead with."
                  subtitle="Respect · Accountability · Curiosity · Care for others"
                  tag="Values"
                  className="h-full"
                />
              </div>

              {/* (10) Right: Image */}
              <div className="row-span-1 md:col-start-9 md:col-span-4 md:row-start-5 md:row-span-1 bg-amber-600/60 rounded-3xl overflow-hidden">
                <ImageTile
                  label="(Placeholder)"
                  className="h-full w-full"
                // src="/your-image.jpg"
                />
              </div>

              {/* full-width banner */}
              <div className="row-span-1 md:col-start-1 md:col-span-12 md:row-start-6 md:row-span-1">
                <GradientTile
                  title="Grounded in responsibility."
                  subtitle="Leadership built through people, structure, and long-term commitment."
                  tag="Overview"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="glass-bg space-y-6 sm:space-y-8 lg:space-y-10 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 glass p-6 sm:p-8 lg:p-10 rounded-md">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src="./VTLOGO.png"
                  alt="Virginia Tech Logo"
                  className="
                    h-10 sm:h-12 lg:h-14
                    w-auto
                    object-contain"
                />
                <h2 className="text-2xl font-semibold font-mono">
                  Education
                </h2>
              </div>

              <p className="text-sm tile-muted hidden sm:block">
                Academic foundation
              </p>
            </div>
            {/* Body */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left: School info */}
              <div className="flex-1 space-y-2">
                <p className="font-mono font-semibold text-lg">
                  Virginia Polytechnic Institute and State University
                </p>

                <p className="text-sm tile-muted leading-relaxed">
                  B.S. in Computer Science · Minor in Cybersecurity
                </p>

                <div className="pt-2">
                  <span className="inline-block w-fit max-w-full truncate rounded-full border border-neutral-200/40 bg-white/5 px-4 py-2 text-sm font-mono tile-muted">
                    Aug 2023 – May 2027 · Expected
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm font-medium font-mono">Coursework at Virginia Tech</p>
                <p className="text-sm tile-muted leading-relaxed">
                  Data Structures & Algorithms · Computer Organization I & II ·
                  Software Design · Artificial Intelligence ·
                  Discrete Mathematics · Linear Algebra · Multivariable Calculus
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="w-full space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 glass p-6 sm:p-8 lg:p-10 rounded-md ">
            <header className="text-2xl font-mono font-semibold text-center mb-6 sm:mb-8">
              About Me
            </header>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              {/* ABOUT TEXT */}
              <p className="text-md text-left font-mono text-muted leading-relaxed lg:w-2/3">
                I’m a Computer Science student at Virginia Tech (Class of 2027), interested in building
                software that’s reliable, well-structured, and designed with intention.<br /><br />

                My experience spans research and hands-on projects, from systems-focused problem solving
                to user-facing interfaces. I care about clear documentation, thoughtful design decisions,
                and building software that holds up under real constraints.<br /><br />

                Outside of tech, I’m involved in modeling, mentoring, and community leadership. Those
                experiences have shaped how I communicate, collaborate, and lead with consistency.
                <br /><br />

                I’m always looking to try new things, take on meaningful opportunities,
                and build on my past experiences while developing new skills.
              </p>

              {/* FACTS BOX */}
              <div className="lg:w-1/2 w-full border border-neutral-700 rounded-4xl p-5 sm:p-6 flex flex-col">
                <h2 className="font-mono font-semibold text-xl mb-4 text-center">
                  Facts
                </h2>

                <ul className="space-y-3 text-md text-muted font-mono">
                  <li className="flex items-center justify-center text-center gap-2">
                    <School2Icon size={18} />
                    Virginia Tech · Computer Science</li>
                  <li className="flex items-center text-center justify-center gap-2">
                    <GraduationCapIcon size={18} />
                    <span>Expected May 2027</span>
                  </li>
                  <li>Software + Systems</li>
                  <li>Model · Mentor · Community Leader</li>
                  <li>Open to Internships/Opportunities</li>
                  <li>U.S. Citizen · Clearance Eligible · Willing to Relocate</li>
                </ul>
                <div className="mt-10 gap-2 flex justify-center">
                  <Button
                    href="mailto: jefferyachamfuor@gmail.com"
                    variant="clear"
                    shape="circle"
                    external
                  ><Mail size={18} /></Button>

                  <Button
                    href="https://github.com/Jachamfuor"
                    variant="clear"
                    shape="circle"
                    external
                  ><Github size={18} /></Button>

                  <Button href="https://linkedin.com/in/jefferyachamfuor/"
                    variant="clear"
                    shape="circle"
                    external
                  ><Linkedin size={18} /></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-bg space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
          <div className="font-mono rounded-md p-2">
            <h1 className="text-3xl text-black font-bold rounded-md bg-gray-300 p-2 ">Let's Connect</h1>
            <ul className="mt-6 space-y-2 pl-2">
              <h2 className="font-bold text-center">Get In Touch</h2>
              <li>
                <a className="inline-flex items-center gap-2 p-1" href="mailto:Jefferyachamfuor@gmail.com">
                  <Mail size={18} /> Jefferyachamfuor@gmail.com
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 p-1" href="https://github.com/Jachamfuor">
                  <Github size={18} />github.com/Jachamfuor
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 p-1" href="https://www.linkedin.com/in/jachamfuor/">
                  <Linkedin size={18} />linkedin.com/in/jefferyachamfuor
                </a>
              </li>
              <h2 className="mt-10 font-bold">Open to Opportunites</h2>

            </ul>
          </div>

        </section >
      </main >
    </>
  );
}