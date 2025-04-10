"use client";

export default function PhaseCard({ number, title, description }) {
  return (
    <div className="px-15 border rounded-xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15 py-[8rem] lg:py-[17rem] flex justify-center w-[20rem] lg:w-[33rem] z-0 relative">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#0C0E23] to-[#04071D] border border-[#6971A2]/15 rounded-xl py-2 px-5 absolute top-10 lg:top-45">
        <p className="text-[#CBACF9] font-semibold text-[1.25rem] text-center">
          Phase {number}
        </p>
      </div>

      <div>
        <p className="font-bold text-[2.5rem] leading-none text-center mb-5">
          {title}
        </p>
        <p className="text-center text-[#E4ECFF]">{description}</p>
      </div>
    </div>
  );
}
