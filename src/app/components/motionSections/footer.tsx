"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link"

export function Footer() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />
            <div
            className="absolute w-[700px] h-[500px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGpraTduMW05NndiajBjdGRydGttNHhydmRxcmExYmlpcWQyMXNmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14lL3E1GR9AXSM/giphy.gif')",
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
              Contact me
            </h1>
            <Link href="https://discord.com/users/826317527578837013">
            <Image
            src="/disc.png"
            alt="Shein"
            width={150}
            height={150}
            priority
            className="relative z-10 rounded-3x1"
            />
            </Link>
            <Link href="https://www.linkedin.com/in/enoque-souza-9893823a2/">
            <Image
            src="/linkedin1.png"
            alt="Shein"
            width={150}
            height={150}
            priority
            className="relative z-10 rounded-3x1"
            />
            </Link>
            </motion.div>
            <div className="mb-100">
            {/*          */}
            </div>
        </div>
        
    )
}