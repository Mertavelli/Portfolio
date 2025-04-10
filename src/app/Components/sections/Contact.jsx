import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-[10rem] lg:py-[18rem] bg-[url('/bg2.png')] bg-cover bg-bottom relative"
    >
      <p className="text-center font-bold text-[3rem] leading-none">
        Ready to take <span className="text-[#CBACF9] leading-none">your</span>{" "}
        digital
      </p>
      <p className="text-center font-bold text-[3rem] leading-none pb-7">
        presence to the next level?
      </p>
      <p className="text-center text-[#C1C2D3]">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>

      <div className="flex justify-center mt-7">
        <Link href="/contact" className="inline-block">
          <div className="flex items-center justify-center space-x-1 py-4 px-10 rounded-xl border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15">
            <p className="text-[1.25rem] font-semibold">Contact Me Now</p>
            <GoArrowUpRight style={{ fontSize: "1.5rem" }} />
          </div>
        </Link>
      </div>

      <p className="absolute bottom-10 left-0">Copyright ©2025 Louis Karakas</p>
    </div>
  );
}
