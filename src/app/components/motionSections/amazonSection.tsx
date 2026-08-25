"use client"
import { motion } from "motion/react";
import Image from "next/image";

export function Amazon() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />
            <div
            className="absolute w-[1150px] h-[700px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1783605562/gif3_pzpciz.gif')",
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
            src="/AMZ2.png"
            alt="Amazon"
            width={700}
            height={1100}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
            <h1 className="max-w-xs text-[18px] font-semibold leading-10 tracking-tight text-zinc-50">
                Amazon Inspired Products Project
            </h1>
            <p className="max-w-md text-[16px]leading-8 text-zinc-400">
            Made with principles following close/to amazon products.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {/*          */}
            </div>
            <div
            className="absolute w-[1100px] h-[500px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1wbzQ1MW9hMjVjbHNpZzBsNTZyZTFzdGxxOWUzcDFidnh2aWk1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornjXKWFKxffisyfS/giphy.gif')",
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
            <h1 className="max-w-xs text-[18px] font-semibold leading-10 tracking-tight text-zinc-50">
                Created Using
            </h1>
            <p className="max-w-md text-[16px] leading-8 text-zinc-400">
            Nextjs Prisma & mySql, implementing Ecommerce SaaS principles, Compound components and Amazon/like Database products with normalization.
            </p>
            <br></br>
            <p className="max-w-md text-[15px] leading-8 text-zinc-400">
            {`(Mainly for product mockup, project does not follow Amazon Ui, only for products representation/code alike.)`}
            </p>
            <Image
            src="/empty.png"
            alt="Empty"
            width={100}
            height={100}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
        </div>
        
    )
}