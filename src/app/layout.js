import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Louis Karakas Web Dev",
  description: "My personal Web Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="bg-[url('/bg.png')] bg-contain bg-top min-h-screen flex justify-center items-center px-6">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <img
              src="/spotlightleft.png"
              alt="spotlightleft"
              className="hidden sm:block absolute top-0 left-0 w-[30rem] lg:w-[60rem] z-0"
            />
            <img
              src="/spotlightright.png"
              alt="spotlightright"
              className="hidden sm:block absolute top-0 right-0 w-[30rem] lg:w-[60rem] z-0"
            />
          </div>

          <div className="w-full max-w-[100rem] z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
