"use client";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ExpCard from "./components/ExpCard";
import ExperienceImgCard from "./components/ExperienceImgCard"
import Button from "./components/Button";
import Bubble from "./components/TextBubbles";
import { Code2, Monitor, Wrench, Lightbulb } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import CarouselRow from "./components/CarouselRow";
import { useState } from "react";
import MatrixIntro from "./components/MatrixIntro";
import activity from "@/data/activity.json"

/** 
 * This file contains the Home Page UI
*/

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
          <div className="bg-neutral-200/5 p-6 sm:p-8 lg:p-10 rounded-md">
            <header className="text-2xl font-mono font-semibold text-center mb-6 sm:mb-8">
              About Me
            </header>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              {/* ABOUT TEXT */}
              <p className="text-md text-left font-mono text-gray-500 leading-relaxed lg:w-2/3">
                I’m a Computer Science student at Virginia Tech who is passionate about
                building thoughtful, impactful technology. I’m currently pursuing my
                Bachelor’s degree and expect to graduate in May 2027.
                <br /><br />

                I have experience in AI, software development, systems programming,
                frontend engineering, cybersecurity, and research. Through coursework,
                projects, and research, I’ve gained experience working across the stack,
                from low-level systems thinking to designing clean, user-focused
                interfaces. I enjoy solving problems that require both technical depth
                and clear communication, especially when building software that people
                actually use.
                <br /><br />

                Outside of tech, I’m a model, mentor for first year engineering students
                and K–12 graders, and a community leader. These experiences have helped
                me connect creativity with engineering and work effectively in team
                environments.
                <br /><br />

                I’m always looking to try new things, take on meaningful opportunities,
                and build on my past experiences while developing new skills.
              </p>

              {/* FACTS BOX */}
              <div className="lg:w-1/3 w-full border border-neutral-700 rounded-md p-5 sm:p-6 flex flex-col">
                <h2 className="font-mono font-semibold text-lg mb-4 text-center">
                  Facts
                </h2>

                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                  <li>Virginia Tech CS, Class of 2027</li>
                  <li>Interests: AI, Systems, Frontend</li>
                  <li>Research in Human-Centered Security</li>
                  <li>Model, Mentor, Community Leader</li>
                  <li>Actively seeking SWE internships</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-4 sm:space-y-6">
            <img
              src="./VTLOGO.png"
              alt="VT Logo"
              className="w-md h-md mx-auto" />
            <header className="text-2xl font-semibold font-mono text-center">
              Education
            </header>

            <div className="space-y-2 text-center">
              <h1 className="font-mono font-semibold">
                Virginia Polytechnic Institue and State University
              </h1>
              <h2 className="text-gray-600">
                B.S. in Computer Science<br />Minor in CyberSecurity
              </h2>

              <div className="flex justify-center">
                <Bubble
                  skills={["August 2023 - May 2027"]}
                />
              </div>
              <div className="flex justify-center">
                <Bubble
                  skills={["List classes and concepts"]}
                />
              </div>
            </div>
          </div>

          {/* GitHub Automation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Latest Activity</h2>
            <p className="text-sm text-gray-600">
              Updated {new Date(activity.generatedAt).toLocaleString()}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-5">
                <h3 className="font-semibold mb-3">Recent Commits</h3>
                <ul className="space-y-2 text-sm">
                  {activity.recentCommits?.length ? (
                    activity.recentCommits.map((c: any) => (
                      <li key={`${c.repo}-${c.sha}`} className="text-gray-700">
                        <div className="text-xs text-gray-500">{c.repo}</div>
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
                    <li className="text-gray-500">No recent commits found.</li>
                  )}
                </ul>
              </div>

              <div className="rounded-lg border p-5">
                <h3 className="font-semibold mb-3">Recently Updated Repos</h3>
                <ul className="space-y-3 text-sm">
                  {activity.recentRepos?.length ? (
                    activity.recentRepos.map((r: any) => (
                      <li key={r.fullName}>
                        <a className="underline font-medium" href={r.url}>
                          {r.name}
                        </a>
                        <div className="text-gray-600">{r.description}</div>
                        <div className="text-xs text-gray-500">
                          {r.language || "—"} · ★ {r.stars}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No repos found.</li>
                  )}
                </ul>
              </div>
            </div>
          </section>


          {/* FEATURED PROJECTS */}
          <div className="space-y-6">
            <header className="text-2xl font-semibold">Featured Projects</header>

            <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
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
          <div className="space-y-6">
            <header className="text-2xl font-semibold">Skills</header>
            <p className="font-mono font-semibold text-gray-600">
              My arsenal for building applications
            </p>

            <ul className="grid gap-4 lg:gap-6 text-gray-700 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <SkillCard
                title="Languages"
                icon={Code2}
                skills={["Java", "Python", "C", "JavaScript/TypeScript", "SQL", "x86 Assembly"]}
              />

              <SkillCard
                title="Frontend"
                icon={Monitor}
                skills={["React", "Next.js", "Tailwind CSS"]}
              />

              <SkillCard
                title="Tools"
                icon={Wrench}
                skills={["Git", "GitHub", "GitHub Actions", "Linux",]}
              />

              <SkillCard
                title="Concepts"
                icon={Lightbulb}
                skills={["Data Structures and Algorthims", "Software Design", "Systems", "Artfical Intellegence", "Automation"]}
              />
            </ul>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <CarouselRow title="Experience" autoScroll interval={5500}>
              <div className="snap-start shrink-0 w-8 sm:w-10 lg:w-12" aria-hidden="true" />
              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Research Assistant"
                  job="REACH Human-Computer Interaction Lab - Blacksburg, VA "
                  time="August 2025 - December 2025"
                  description="Conducted human-centered security research focused on how users detect and respond to suspicious activity 
            across cultural and generational contexts. Supported qualitative research workflows including literature reviews, 
            participant coordination, protocol refinement, and ethical data collection, contributing to over 50 research artifacts and analyses."
                  skills={["Qualitative Research", "Human-Centered Design", "Literature Review", "Interviewing", "Data Analysis", "Research Ethics", "Technical Writing", "Collaboration"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Data Analyst Intern"
                  job="Onwe Hospital - Onwe, Ghana, West Africa"
                  time="June 2022"
                  description="Led the digitization of patient record systems, improving data accuracy and reducing manual paperwork for over 
            300 patients. Optimized database organization and retrieval workflows to significantly improve operational efficiency for 
            medical staff. Gained hands-on experience applying data-driven solutions in a real-world healthcare setting."
                  skills={["Data Analysis", "Database Optimization", "Data Cleaning", "Process Improvement", "Microsoft Excel", "Problem Solving", "Technical Documentation"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Test Proctor"
                  job="Virginia Tech – Services for Students with Disabilities - Blacksburg, VA"
                  time="August 2025 – Present"
                  description="Administer exams for students with approved accommodations while ensuring academic integrity, accessibility, and confidentiality. Developed 
            strong attention to detail, professionalism, and communication skills while working within structured academic policies."
                  skills={["Professional Communication", "Attention to Detail", "Time Management", "Confidentiality", "Policy Adherence"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Personal Assistant"
                  job="Corporate Marketing Executive - Vacaville, CA"
                  time="June 2025 – August 2025"
                  description="Provided administrative and organizational support in a fast-paced professional environment, managing schedules, coordinating logistics, 
            and assisting with task prioritization. Built strong organizational habits and learned how to operate effectively under shifting priorities."
                  skills={["Organization", "Time Management", "Professional Communication", "Task Prioritization", "Adaptability", "Problem Solving"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Digital Personal Shopper"
                  job="Walmart, Inc. - Vacaville, CA"
                  time="June 2024"
                  description="Fulfilled online grocery orders by selecting, packaging, and preparing items with accuracy and efficiency. Maintained high service 
            standards while working under time constraints in a customer-facing retail environment."
                  skills={["Customer Service", "Efficiency", "Attention to Detail", "Time Management", "Teamwork"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Architecture Design Intern"
                  job="XL Management Services Ghana Ltd - Accra, Ghana"
                  time="July 2022"
                  description="Assisted with architectural design documentation and project planning tasks, gaining exposure to professional design workflows 
            and collaborative project environments. Developed a foundational understanding of translating conceptual designs into structured plans."
                  skills={["Design Documentation", "Spatial Reasoning", "Collaboration", "Technical Drawing Review", "Professional Workflow Exposure"]}
                />
              </div>
              <div className="snap-start shrink-0 w-8 sm:w-10 lg:w-12" aria-hidden="true" />
            </CarouselRow>

            {/* Leadership % Involvement */}
            <CarouselRow title="Leadership & Involvement" autoScroll interval={5500}>
              <div className="snap-start shrink-0 w-8 sm:w-10 lg:w-12" aria-hidden="true" />
              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Sustainability Initiative Lead"
                  job="Sustainable Fashion Society - Blacksburg, VA"
                  time="August 2025 – Present"
                  description="Lead sustainability-focused initiatives promoting ethical fashion practices and community engagement. Coordinate projects 
            and partnerships while guiding team members through planning and execution, strengthening leadership and project management skills."
                  skills={["Leadership", "Project Management", "Sustainability Advocacy", "Team Coordination", "Strategic Planning"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Board Member"
                  job="Vêtement De Rue Fashion Organization · Blacksburg, VA"
                  time="August 2024 – Present"
                  description="Contribute to organizational strategy, event planning, and creative direction for a student-led fashion organization. 
            Support designers and foster a collaborative space centered on creativity, identity, and self-expression."
                  skills={["Strategic Planning", "Creative Direction", "Event Coordination", "Leadership", "Collaboration"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Member"
                  job="National Society of Black Engineers (NSBE) & ColorStack - Blacksburg, VA"
                  time="August 2023 – Present"
                  description="Engage in technical workshops, professional development sessions, and community-building initiatives focused on 
            supporting underrepresented students in computing and engineering fields."
                  skills={["Networking", "Professional Development", "Technical Growth", "Community Engagement"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Well-Being Resident Advisor"
                  job=""
                  time="December 2024 – June 2025"
                  description="Supported student well-being by fostering an inclusive residential community, providing peer support, and 
            connecting residents with campus resources. Strengthened interpersonal skills while addressing student needs with empathy and professionalism."
                  skills={["Mentorship", "Conflict Resolution", "Communication", "Community Building", "Emotional Intelligence"]}
                />
              </div>

              <div className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] xl:w-[35%]">
                <ExpCard
                  role="Peer Mentor"
                  job="Center for Engineering Excellence and Discovery - Blacksburg, VA"
                  time="August 2023 – June 2025"
                  description="Mentored engineering students through academic guidance, resource navigation, and peer support. Helped students transition 
            into college-level coursework while reinforcing study strategies and confidence in STEM disciplines."
                  skills={["Mentoring", "Academic Support", "Communication", "Leadership", "STEM Advocacy"]}
                />
              </div>
              <div className="snap-start shrink-0 w-8 sm:w-10 lg:w-12" aria-hidden="true" />
            </CarouselRow>
          </div>


          {/* CTA */}
          <div className="font-mono rounded-md p-2">
            <h1 className="text-3x1 text-black font-bold rounded-md bg-gray-300 p-2 ">Let's Connect</h1>
            <ul className="mt-6 space-y-2 pl-2">
              <h2 className="font-bold">Get In Touch</h2>
              <li>
                <a className="p-1" href="mailto:Jefferyachamfuor@gmail.com">
                  Jefferyachamfuor@gmail.com
                </a>
              </li>
              <li>
                <a className="p-1" href="https://github.com/Jachamfuor">
                  github.com/Jachamfuor
                </a>
              </li>
              <li>
                <a className="p-1" href="https://www.linkedin.com/in/jachamfuor/">
                  linkedin.com/in/jachamfuor
                </a>
              </li>
              <h2 className="mt-10 font-bold">Open to Opportunites</h2>
              <li>
                <a >

                </a>
              </li>
            </ul>
          </div>
        </section >
      </main>
    </>
  );
}