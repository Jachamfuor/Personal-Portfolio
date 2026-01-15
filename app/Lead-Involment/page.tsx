import ExpCard from "@/app/components/ExpCard";
import CarouselRow from "@/app/components/CarouselRow";

export default function LeadInvolmentPage() {
    return (
        <section className="w-full bg-neutral-200/5 space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
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
                role="Well-Being Resident Advisor - Blacksburg, VA"
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
        </section>
    );
}