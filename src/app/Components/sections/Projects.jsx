import Card from "../utils/Card.jsx";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

export default function Projects() {
    const projectData = [
        {
            src: '/project1.png',
            title: '3D Solar System Planets to Explore',
            description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
        },
        {
            src: '/project2.png',
            title: 'Yoom - Video Conferencing App',
            description: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
        },
        {
            src: '/project3.png',
            title: 'AI Image SaaS - Canva Application',
            description: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
        },
    ];

    const icons = [
        <SiNextdotjs key="nextjs" />,
        <SiTailwindcss color="#38BDF8" key="tailwind" />,
        <SiTypescript className="bg-white rounded-sm" color="#3178C6" key="typescript" />,
        <SiMongodb color="#4DB33D" key="mongodb" />
    ];

    return (
        <>
            <div id="projects" className="mt-[5rem] w-full">
                <p className="text-center font-bold text-[3rem] leading-none pb-15">
                    A small selection of <span className="text-[#CBACF9]">recent projects</span>
                </p>

                <div className="flex flex-wrap justify-center gap-10 lg:gap-6.5 w-full md:px-10 lg:px-0">
                    {projectData.map((project, index) => (
                        <Card
                            key={index}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            icons={icons}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
