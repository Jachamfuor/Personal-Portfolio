import CarouselRow from "../components/CarouselRow";
import ExpCard from "../components/ExpCard";

export default function ExperiencePage() {
    return (

        <section className="space-y-12 sm:space-y-16 lg:space-y-20 py-12 sm:py-16 lg:py-20">
            {/* Experience */}
            <div className="space-y-6">
                <CarouselRow title="Experience" autoScroll interval={5500}>
                    <div className="bg-neutral-200/5snap-start shrink-0 w-8 sm:w-10 lg:w-12" aria-hidden="true" />
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
            </div>
        </section>
    );
}
