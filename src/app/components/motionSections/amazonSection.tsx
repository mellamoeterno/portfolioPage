"use client"
import { motion } from "motion/react";
import Image from "next/image";

export function Amazon() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

            {/* static glow */}

            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />

            {/* motion */}

            <div
            className="absolute w-[1150px] h-[700px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1783605562/gif3_pzpciz.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />

            {/* static shadow */}


            {/* profile image */}

            <motion.div
            style={{
                willChange: "transform",
            }}
            animate={{
                y: [0, -6, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            >

            <Image
            src="/AMZ2.png"
            alt="Amazon"
            width={700}
            height={1100}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>

            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Amazon Clone Project
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Made with principles following close/to amazon code.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {/*          */}
            </div>


            {/* created using */}

            <div
            className="absolute w-[1100px] h-[500px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://i.giphy.com/fLyxKDDq0vjbLXiUXT.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />

            {/* static shadow */}


            {/* profile image */}

            <motion.div
            style={{
                willChange: "transform",
            }}
            animate={{
                y: [0, -6, 0],
            }}
            transition={{
                duration: 6,
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
            alt="Empty"
            width={700}
            height={500}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {/*          */}
            </div>
            
            {/* created using */}
            
        </div>
        
    )
}