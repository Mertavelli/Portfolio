import PhaseCard from "../utils/PhaseCard";

export default function Phases() {
    return (
        <>
            <div className="mt-[5rem]">
                <p className="text-center font-bold text-[3rem] leading-none pb-15">
                    My <span className="text-[#CBACF9] leading-none">approach</span>
                </p>

                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10 lg:gap-6.5 w-full px-10 lg:px-0 justify-items-center relative">
                    {/* Cross images */}
                    {Array.from({ length: 8 }).map((_, index) => (
                        <img
                            key={index}
                            src="/cross.svg"
                            alt="Cross"
                            className={`hidden xl:block w-11 h-11 absolute ${index < 4
                                    ? `top-[-18px] ${index % 2 === 0 ? 'left' : 'right'}-[-20px]`
                                    : `bottom-[-18px] ${index % 2 === 0 ? 'left' : 'right'}-[505px]`
                                } z-10`}
                        />
                    ))}

                    <PhaseCard
                        number={"1"}
                        title={"Concept & Planning"}
                        description={
                            "Before writing a single line of code, I focus on concept and strategy. We define goals, map out the structure, and create a solid foundation for development. A clear roadmap ensures smooth execution."
                        }
                    />

                    <PhaseCard
                        number={"2"}
                        title={"Development & Progress Update"}
                        description={
                            "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
                        }
                    />

                    <PhaseCard
                        number={"3"}
                        title={"Finalization & Delivery"}
                        description={
                            "After thorough testing and refinements, the project is ready to launch. I ensure a seamless deployment and provide support to guarantee everything runs smoothly. Your vision—now a reality."
                        }
                    />
                </div>
            </div>
        </>
    );
}
