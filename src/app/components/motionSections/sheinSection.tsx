"use client"
import { motion } from "motion/react";
import Image from "next/image";

export function Shein() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />
            <div
            className="absolute w-[1150px] h-[900px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVpaTNvN25lMWc4ZXU0MnNpZm5hcXhocTN5MmZyNGxod3VkbHg5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7WIASlkxldyLOpfq/giphy.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
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
            src="/sheinWhite1.png"
            alt="Shein"
            width={500}
            height={900}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Shein Clone Project
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Made with principles following close/to Shein code.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {/*          */}
            </div>
            <div
            className="absolute w-[1100px] h-[500px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://i.giphy.com/fLyxKDDq0vjbLXiUXT.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
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
            width={250}
            height={250}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
        </div>
    )
}