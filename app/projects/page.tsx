import ProjectCard from "../components/ProjectCard";
/** 
 * This file contains the Projects Page UI
*/

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-3 text-gray-600 mb-2">
                A few things I've built. (Add real project cards here later)
            </p>
            <div>
                <ProjectCard 
                title="Example Card"
                description="Fill later"
                techs={["x,y,z"]}
                href=""
                />
            </div>

        </section>
    );
}