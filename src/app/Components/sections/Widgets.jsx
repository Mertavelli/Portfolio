import CopyEmailButton from "../utils/CopyEmailButton";

export default function Widgets() {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6.5 w-full md:px-10 lg:px-0">


                <div className="bg-[url('/box1.png')] bg-cover bg-center bg-no-repeat w-[20rem] h-[20rem] md:w-[42rem] lg:w-[145rem] md:min-h-[42rem] relative rounded-2xl">
                    <div className="absolute bottom-20 left-8">
                        <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">I prioritize client</p>
                        <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">collaboration, fostering</p>
                        <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">open communication</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:gap-6.5 w-full">
                    <div className="bg-[url('/box2.png')] bg-cover bg-center bg-no-repeat w-full lg:w-[40rem] h-[20rem] relative rounded-2xl">
                        <div className="absolute top-10 left-8">
                            <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">I’m very flexible with time</p>
                            <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">zone communications</p>
                        </div>
                    </div>

                    <div className="bg-[url('/box3.png')] bg-cover bg-center bg-no-repeat lg:w-[40rem] h-[20rem] relative rounded-2xl">
                        <div className="absolute top-30 left-8">
                            <p className="font-normal text-[1.25rem] text-[#C1C2D3] leading-none mb-3">I constantly try to improve</p>
                            <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">My tech stack</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6.5 w-full md:px-10 lg:px-0">

                <div className="grid grid-cols-1 gap-10 lg:gap-6.5 w-full">
                    <div className="bg-[url('/box4.png')] bg-cover bg-center bg-no-repeat lg:w-[25rem] h-[12.4rem] relative rounded-2xl">
                        <div className="absolute top-9 left-8">
                            <p className="font-bold text-[1.8rem] leading-none">Tech enthusiast with a</p>
                            <p className="font-bold text-[1.8rem] leading-none">passion for development.</p>
                        </div>
                    </div>

                    <div className="bg-[url('/box5.png')] bg-cover bg-center bg-no-repeat lg:w-[25rem] h-[12.4rem] relative rounded-2xl flex flex-col items-center">
                        <div className="py-7">
                            <p className="font-bold text-center text-[1.8rem] leading-none">Do you want to start</p>
                            <p className="font-bold text-center text-[1.8rem] leading-none">a project together?</p>
                        </div>

                        <CopyEmailButton />
                    </div>
                </div>

                <div className="bg-[url('/box6.png')] bg-cover bg-center bg-no-repeat w-[20rem] h-[20rem] md:w-[42rem] lg:w-[300rem] md:h-[26.5rem] relative rounded-2xl">
                    <div className="absolute top-20 sm:top-35 left-8">
                        <p className="font-normal text-[1.25rem] text-[#C1C2D3] leading-none mb-3">The Inside Scoop</p>
                        <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">Currently expanding my skills</p>
                        <p className="font-bold text-[2rem] sm:text-[2.5rem] leading-none">in Three.js and Web3.js</p>
                    </div>

                </div>
            </div>
        </>
    )
}