export default function Hero({ scrollToSection }) {
    return (
        <div className="flex flex-col items-center text-center">
            <p className="font-thin text-[1rem] tracking-[0.25rem]">
                DYNAMIC WEB MAGIC WITH NEXT.JS
            </p>
            <p className="font-bold text-[3rem] md:text-[5rem] leading-none pt-3">
                Transforming Concepts into
            </p>
            <p className="font-bold text-[3rem] md:text-[5rem] leading-none pb-7">
                Seamless <span className="text-[#CBACF9]">User Experiences</span>
            </p>
            <p className="font-thin text-[1.35rem]">
                Hi! I'm Louis Karakas, a Next.js Developer based in Germany
            </p>

            <button
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer z-50 relative mt-[2rem] flex items-center border py-4 px-10 rounded-xl bg-gradient-to-r from-[#0C0E23] to-[#04071D] border-[#6971A2]/15"
            >
                <p className="mr-2 text-[1.2rem] font-medium">See my work</p>
                <img src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
            </button>
        </div>
    );
}
