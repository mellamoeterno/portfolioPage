"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { RevealSection } from "../app/components/slidingSection"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* BIG GLOW */}

        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/30 blur-[80px]"
            animate={{
              x: [0, 18, -12, 8, 0],
              y: [0, -15, 10, -5, 0],
              scale: [1, 1.08, 0.96, 1.05, 1],
              opacity: [0.28, 0.4, 0.3, 0.38, 0.28],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* GLITCH / NOISE TEXTURE */}
          <motion.div
            className="absolute w-[500px] h-[500px] opacity-20 mix-blend-screen blur-md"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1774490288/diorHommeSport_4_snwqlj.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              x: [0, -15, 25, -10, 0],
              y: [0, 12, -20, 8, 0],
              rotate: [0, 5, -4, 3, 0],
              scale: [1, 1.1, 0.95, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* DROP SHADOW */}
          <motion.div
            className=" absolute bottom-[120px] w-[220px] h-[45px] rounded-full bg-black/30 blur-3xl"
            animate={{
              scaleX: [1, 1.1, 0.92, 1.05, 1],
              opacity: [0.2, 0.3, 0.22, 0.28, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* PRODUCT IMAGE */}
          <motion.div
            animate={{
              y: [0, -10, 5, -7, 0],
              rotate: [0, 1, -1, 0.5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/glitch1.png"
              alt="Perfume"
              width={350}
              height={550}
              priority
              className="relative z-10"
            />
          </motion.div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Enoque Souza
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Software Developer
            <a
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            <br/>
              Knowledge: Junior React & Typescript | Basic MySql |
            </a>
            <br/>
            <a
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            <br/>
              experience in Ecommerce & Perfomance 
            </a>
            <br/>
            <a
              className="font-medium text-zinc-600 dark:text-zinc-400"
              href="https://github.com/mellamoeterno"
            >
            <br/>
              Github
            </a>
          </p>
        </div>
{/*         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
          href="https://discord.com/users/850435833516523601"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[300px]"
          >
            Contact me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[300px]"
          >
            Project Amazon Mock Up
          </a>
          <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[300px]"
          >
          Project Shein Mock Up
          </a>
        </div> */}
      </main>
    <RevealSection>
                <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* BIG GLOW */}

        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/30 blur-[80px]"
            animate={{
              x: [0, 18, -12, 8, 0],
              y: [0, -15, 10, -5, 0],
              scale: [1, 1.08, 0.96, 1.05, 1],
              opacity: [0.28, 0.4, 0.3, 0.38, 0.28],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* GLITCH / NOISE TEXTURE */}
          <motion.div
            className="absolute w-[500px] h-[500px] opacity-20 mix-blend-screen blur-md"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1774490288/diorHommeSport_4_snwqlj.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              x: [0, -15, 25, -10, 0],
              y: [0, 12, -20, 8, 0],
              rotate: [0, 5, -4, 3, 0],
              scale: [1, 1.1, 0.95, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* DROP SHADOW */}
          <motion.div
            className=" absolute bottom-[120px] w-[220px] h-[45px] rounded-full bg-black/30 blur-3xl"
            animate={{
              scaleX: [1, 1.1, 0.92, 1.05, 1],
              opacity: [0.2, 0.3, 0.22, 0.28, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* PRODUCT IMAGE */}
          <motion.div
            animate={{
              y: [0, -10, 5, -7, 0],
              rotate: [0, 1, -1, 0.5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/glitch1.png"
              alt="Perfume"
              width={350}
              height={550}
              priority
              className="relative z-10"
            />
          </motion.div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Enoque Souza
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Software Developer
            <a
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            <br/>
              Knowledge: Junior React & Typescript | Basic MySql |
            </a>
            <br/>
            <a
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            <br/>
              experience in Ecommerce & Perfomance 
            </a>
            <br/>
            <a
              className="font-medium text-zinc-600 dark:text-zinc-400"
              href="https://github.com/mellamoeterno"
            >
            <br/>
              Github
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
          href="https://discord.com/users/850435833516523601"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[300px]"
          >
            Contact me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[300px]"
          >
            Project Amazon Mock Up
          </a>
          <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[300px]"
          >
          Project Shein Mock Up
          </a>
        </div>
      </main>
    </RevealSection>
    </div>
  );
}
