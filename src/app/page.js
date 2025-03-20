'use client'

import Image from "next/image";
import CopyEmailButton from "./Components/CopyEmailButton";
import Card from "./Components/Card";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import PhaseCard from "./Components/PhaseCard";
import { GoArrowUpRight } from "react-icons/go";
import Lenis from 'lenis'
import Link from "next/link";

export default function Home() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (

    <div className="mb-[50rem] h-screen relative">

      <div className="flex justify-center py-20 pb-43 z-50">
        <div className="flex justify-center space-x-10 border py-5 px-10 w-min rounded-xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15">
          <button onClick={() => scrollToSection("about")} className="cursor-pointer z-50 relative">About</button>
          <button onClick={() => scrollToSection("projects")} className="cursor-pointer z-50 relative">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="cursor-pointer z-50 relative">Contact</button>
        </div>
      </div>


      {/* 1. Section */}
      <div className="flex flex-col items-center">
        <p className="font-thin text-[1rem] tracking-[0.25rem]">DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <p className="font-bold text-[5rem] leading-none pt-3">Transforming Concepts into</p>
        <p className="font-bold text-[5rem] leading-none pb-7">Seamless <span className="text-[#CBACF9]">User Experiences</span></p>
        <p className="font-thin text-[1.35rem]">Hi! I'm Louis Karakas, a Next.js Developer based in Germany</p>

        <button onClick={() => scrollToSection("projects")} className="cursor-pointer z-50 relative mt-[2rem] flex items-center border py-4 px-10 rounded-xl bg-gradient-to-r from-[#0C0E23] to-[#04071D] border-[#6971A2]/15">
          <p className="mr-2 text-[1.2rem] font-medium">See my work</p>
          <img src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Section */}
      <div id="about" className="mt-[15rem] flex flex-col gap-6.5">
        {/* 1. Block */}
        <div className="flex justify-center gap-6.5">

          <div className="bg-[url('/box1.png')] bg-cover bg-center bg-no-repeat w-[55rem] h-[41.75rem] relative rounded-2xl">
            <div className="absolute bottom-20 left-8">
              <p className="font-bold text-[2.5rem] leading-none">I prioritize client</p>
              <p className="font-bold text-[2.5rem] leading-none">collaboration, fostering</p>
              <p className="font-bold text-[2.5rem] leading-none">open communication</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6.5">
            <div className="bg-[url('/box2.png')] bg-cover bg-center bg-no-repeat w-[40rem] h-[20rem] relative rounded-2xl">
              <div className="absolute top-10 left-8">
                <p className="font-bold text-[2.5rem] leading-none">I’m very flexible with time</p>
                <p className="font-bold text-[2.5rem] leading-none">zone communications</p>
              </div>
            </div>

            <div className="bg-[url('/box3.png')] bg-cover bg-center bg-no-repeat w-[40rem] h-[20rem] relative rounded-2xl">
              <div className="absolute top-30 left-8">
                <p className="font-normal text-[1.25rem] text-[#C1C2D3] leading-none mb-3">I constantly try to improve</p>
                <p className="font-bold text-[2.5rem] leading-none">My tech stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Block */}
        <div className="flex justify-center gap-6.5">

          <div className="grid grid-cols-1 gap-6.5">
            <div className="bg-[url('/box4.png')] bg-cover bg-center bg-no-repeat w-[25rem] h-[12.4rem] relative rounded-2xl">
              <div className="absolute top-9 left-8">
                <p className="font-bold text-[1.8rem] leading-none">Tech enthusiast with a</p>
                <p className="font-bold text-[1.8rem] leading-none">passion for development.</p>
              </div>
            </div>

            <div className="bg-[url('/box5.png')] bg-cover bg-center bg-no-repeat w-[25rem] h-[12.4rem] relative rounded-2xl flex flex-col items-center">
              <div className="py-7">
                <p className="font-bold text-center text-[1.8rem] leading-none">Do you want to start</p>
                <p className="font-bold text-center text-[1.8rem] leading-none">a project together?</p>
              </div>

              <CopyEmailButton />
            </div>
          </div>

          <div className="bg-[url('/box6.png')] bg-cover bg-center bg-no-repeat w-[70rem] h-[26.5rem] relative rounded-2xl">
            <div className="absolute top-35 left-8">
              <p className="font-normal text-[1.25rem] text-[#C1C2D3] leading-none mb-3">The Inside Scoop</p>
              <p className="font-bold text-[2.5rem] leading-none">Currently expanding my skills</p>
              <p className="font-bold text-[2.5rem] leading-none">in Three.js and Web3.js</p>
            </div>

          </div>
        </div>

        {/* 3. Section */}
        <div id="projects" className="mt-[5rem]">
          <p className="text-center font-bold text-[3rem] leading-none pb-12">A small selection of <span className="text-[#CBACF9]">recent projects</span></p>

          <div className="flex flex-wrap justify-center gap-6.5">

            <Card
              src={'/project1.png'}
              title={"3D Solar System Planets to Explore"}
              description={"Explore the wonders of our solar system with this captivation 3D simulation of the planets using Three.js."}
              icons={[
                <SiNextdotjs key="nextjs" />,
                <SiTailwindcss color="#38BDF8" key="tailwind" />,
                <SiTypescript className="bg-white rounded-sm" color="#3178C6" key="typescript" />,
                <SiMongodb color="#4DB33D" key="mongodb" />
              ]}
            />

            <Card
              src={'/project2.png'}
              title={"Yoom - Video Conferencing App"}
              description={"Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends."}
              icons={[
                <SiNextdotjs key="nextjs" />,
                <SiTailwindcss color="#38BDF8" key="tailwind" />,
                <SiTypescript className="bg-white rounded-sm" color="#3178C6" key="typescript" />,
                <SiMongodb color="#4DB33D" key="mongodb" />
              ]}
            />

            <Card
              src={'/project3.png'}
              title={"AI Image SaaS - Canva Application"}
              description={"A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack."}
              icons={[
                <SiNextdotjs key="nextjs" />,
                <SiTailwindcss color="#38BDF8" key="tailwind" />,
                <SiTypescript className="bg-white rounded-sm" color="#3178C6" key="typescript" />,
                <SiMongodb color="#4DB33D" key="mongodb" />
              ]}
            />

            {/*             <Card
              src={'/project4.png'}
              title={"Animated Apple Iphone 3D Website"}
              description={"Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects."}
              icons={[
                <SiNextdotjs key="nextjs" />,
                <SiTailwindcss color="#38BDF8" key="tailwind" />,
                <SiTypescript className="bg-white rounded-sm" color="#3178C6" key="typescript" />,
                <SiMongodb color="#4DB33D" key="mongodb" />
              ]}
            /> */}

          </div>
        </div>

        {/* 4. Section */}
        <div className="mt-[5rem]">
          <p className="text-center font-bold text-[3rem] leading-none pb-12">My <span className="text-[#CBACF9] leading-none">approach</span></p>

          <div className="grid grid-cols-3 gap-6.5 justify-items-center relative">

            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute top-[-18] left-[-20] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute top-[-18] right-[-20] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute bottom-[-18] left-[-20] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute bottom-[-18] right-[-20] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute top-[-18] left-[505] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute top-[-18] right-[505] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute bottom-[-18] left-[505] z-10" />
            <img src="/cross.svg" alt="Cross" className="w-11 h-11 absolute bottom-[-18] right-[505] z-10" />

            <PhaseCard
              number={"1"}
              title={"Concept & Planning"}
              description={"Before writing a single line of code, I focus on concept and strategy. We define goals, map out the structure, and create a solid foundation for development. A clear roadmap ensures smooth execution."}
            />

            <PhaseCard
              number={"2"}
              title={"Development & Progress Update"}
              description={"Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."}
            />

            <PhaseCard
              number={"3"}
              title={"Finalization & Delivery"}
              description={"After thorough testing and refinements, the project is ready to launch. I ensure a seamless deployment and provide support to guarantee everything runs smoothly. Your vision—now a reality."}
            />
          </div>
        </div>

        {/* 5. Section */}
        <div id="contact" className="py-[18rem] bg-[url('/bg2.png')] bg-cover bg-bottom relative">
          <p className="text-center font-bold text-[3rem] leading-none">Ready to take <span className="text-[#CBACF9] leading-none">your</span> digital</p>
          <p className="text-center font-bold text-[3rem] leading-none pb-7">presence to the next level?</p>
          <p className="text-center text-[#C1C2D3]">Reach out to me today and let's discuss how I can help you achieve your goals.</p>

          <div className="flex justify-center mt-7">
            <Link href="/contact" className="inline-block">
              <div className="flex items-center justify-center space-x-1 py-4 px-10 rounded-xl border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15">
                <p className="text-[1.25rem] font-semibold">Contact Me Now</p>
                <GoArrowUpRight style={{ fontSize: '1.5rem' }} />
              </div>
            </Link>
          </div>

          <p className="absolute bottom-10 left-0">Copyright ©2025 Louis Karakas</p>

        </div>

      </div>

    </div>
  );
}
