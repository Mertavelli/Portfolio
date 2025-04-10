export default function Navbar({ scrollToSection }) {
    return (
        <div className="flex justify-center py-10 md:py-20 pb-25 md:pb-45 z-50">
            <div className="flex justify-center space-x-10 py-5 px-10 w-min rounded-xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15">
                {["about", "projects", "contact"].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="cursor-pointer relative z-50"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}
