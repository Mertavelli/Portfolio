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
        <div className="bg-[url('/bg.png')] bg-contain bg-top flex justify-center items-center min-h-screen px-6">
          <div className="flex justify-between w-full absolute top-0 left-0">
            <img src="/spotlightleft.png" alt="spotlightleft" className="w-[60rem] h-[50rem]" />
            <img src="/spotlightright.png" alt="spotlightright" className="w-[60rem] h-[50rem]" />
          </div>
          <div className="w-full max-w-[100rem]"> {/* Hier die max. Breite setzen */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
