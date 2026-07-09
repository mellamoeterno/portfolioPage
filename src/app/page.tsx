"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { RevealSection } from "../app/components/slidingSection"
import Link from "next/link"


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
            className="absolute w-[500px] h-[500px] opacity-20 mix-blend-screen blur-sm"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1783605409/glitch2_wsnngt.gif')",
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
              src="/face.png"
              alt="Perfume"
              width={250}
              height={450}
              priority
              className="relative z-10 rounded-3xl"
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
             Junior React & Typescript | Basic MySql |
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
            className="absolute w-[1150px] h-[700px] opacity-20 mix-blend-screen blur-lg"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1783605562/gif3_pzpciz.gif')",
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
            <Link
            href="https://github.com/mellamoeterno"
            >
            <Image
              src="/AMZ2.png"
              alt="Perfume"
              width={700}
              height={1100}
              priority
              className="relative z-10"
            />
            </Link>
          </motion.div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Amazon Clone Project
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Made with principles following close/to amazon code.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         {/*          */}
        </div>
      </main>
    </RevealSection>
    
    {/* created using */}

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
            className="absolute w-[1100px] h-[500px] opacity-20 mix-blend-screen blur-xl"
            style={{
              backgroundImage: "url('https://i.giphy.com/fLyxKDDq0vjbLXiUXT.webp')",
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
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Created Using
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Nextjs Prisma & mySql, implementing Ecommerce SaaS principles, Compound components and Amazon/like Database products with normalization
          </p>
            <Image
              src="/empty.png"
              alt="Perfume"
              width={700}
              height={500}
              priority
              className="relative z-10"
            />

          </motion.div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         {/*          */}
        </div>
      </main>
    </RevealSection>

    {/* created using */}

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
            className="absolute w-[1150px] h-[900px] opacity-20 mix-blend-screen blur-sm"
            style={{
              backgroundImage: "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVpaTNvN25lMWc4ZXU0MnNpZm5hcXhocTN5MmZyNGxod3VkbHg5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7WIASlkxldyLOpfq/giphy.gif')",
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
            <Link
            href="https://github.com/mellamoeterno"
            >
            <Image
              src="/shein1.png"
              alt="Perfume"
              width={700}
              height={1100}
              priority
              className="relative z-10"
            />
            </Link>
          </motion.div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Shein Clone Project
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Made with principles following close/to Shein code.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         {/*          */}
        </div>
      </main>
    </RevealSection>

    {/* created using */}

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
            className="absolute w-[1100px] h-[500px] opacity-20 mix-blend-screen blur-xl"
            style={{
              backgroundImage: "url('https://i.giphy.com/fLyxKDDq0vjbLXiUXT.webp')",
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
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Created Using
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Nextjs Prisma & mySql, implementing Ecommerce SaaS principles, Compound components and Amazon/like Database products with normalization
          </p>
            <Image
              src="/empty.png"
              alt="Perfume"
              width={700}
              height={500}
              priority
              className="relative z-10"
            />

          </motion.div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         {/*          */}
        </div>
      </main>
    </RevealSection>


      {/* footer */}


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
            className="absolute w-[700px] h-[500px] opacity-20 mix-blend-screen blur-xl"
            style={{
              backgroundImage: "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGpraTduMW05NndiajBjdGRydGttNHhydmRxcmExYmlpcWQyMXNmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14lL3E1GR9AXSM/giphy.gif')",
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
          <motion.div>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Contact me
            </h1>
            <Link 
            href="https://discord.com/users/826317527578837013">
            <Image
              src="/disc.png"
              alt="Perfume"
              width={150}
              height={150}
              priority
              className="relative z-10"
            />
            </Link>
          </motion.div>

      <div className="mb-100">
      </div>

      {/* footer */}



        </div>
    </div>
  );
}
