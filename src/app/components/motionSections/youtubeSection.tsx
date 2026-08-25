"use client"
import { motion } from "motion/react";
import Image from "next/image";

export function youtube() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />
            <div
            className="absolute w-[1150px] h-[700px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3d1YmdmdWhha3oxeDE1NnVwMnM2MmVyaHUweG4zeW1yY3ppMmR2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fq0hN7ls1n60hjlj00/giphy.gif')",
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
            src="/youtube1.png"
            alt="Amazon"
            width={700}
            height={1100}
            priority
            className="relative z-10 rounded-3x1"
            />
            </motion.div>
            <h1 className="max-w-xs text-[18px] font-semibold leading-10 tracking-tight text-zinc-50">
                Checkout my youtube
            </h1>
            <p className="max-w-md text-[16px]leading-8 text-zinc-400">
            In here you can access my channel on YT and see my lessons.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {/*          */}
            </div>
            <div
            className="absolute w-[1100px] h-[500px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVwYXVwOTc2YmgxZ3prZXQwYjM2ZXFrN3NuZm5jbW9henI4c2piNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduNZtgEpOGHpZPa/giphy.gif')",
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
                I teach about javascript
            </h1>
            <p className="max-w-md text-[16px] leading-8 text-zinc-400">
            And i plan on teaching much more about React and Typescript, which are my expertise.
            </p>
            <br></br>
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