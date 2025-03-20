"use client";

import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

export default function Card({ src, title, description, icons }) {
    return (
        <div className="max-w-xl rounded-2xl overflow-hidden shadow-lg p-4 border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15">
            <img className="w-full rounded-xl" src={src} alt="Project Image" />
            <div className="px-4 py-2">
                <h2 className="font-bold text-[1.8rem] my-2">{title}</h2>
                <p className="text-[#BEC1DD] text-thin text-[1.25rem]">{description}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex space-x-[-0.3rem]">
                    {icons.map((icon, index) => (
                        <div key={index} className="p-2 border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15 rounded-full">
                            {icon}
                        </div>
                    ))}
                </div>

                <a href="#" className="text-[#CBACF9] text-[1.25rem] font-semibold hover:underline">
                    <div className="flex content-center items-center space-x-1">
                        <p>Check Live Site</p>
                        <GoArrowUpRight style={{ color: '#CBACF9', fontSize: '1.5rem' }} />
                    </div>
                </a>

            </div>
        </div>
    );
}
