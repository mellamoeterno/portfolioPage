"use client"
import { motion } from "motion/react";
import Image from "next/image";

export function Profile() {
    return (
        <div className="relative flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div 
            className="absolute w-[420px] h-[420px] rounded-full bg-zinc-900/20 blur-[40px]"
            />
            <div
            className="absolute w-[420px] h-[420px] opacity-10 blur-sm"
            style={{
                backgroundImage:
                "url('https://res.cloudinary.com/dyiyheyzq/image/upload/v1783605409/glitch2_wsnngt.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
            <div
            className="absolute bottom-[120px] w-[180px] h-[35px] rounded-full bg-black/20 blur-2x1 "
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
            src="/face.png"
            alt="Profile"
            width={250}
            height={450}
            priority
            className="relative z-10 rounded-3xl"
            />
            </motion.div>
            <h1
            className="max-w-xs text-3x1 font-semibold leading-10 tracking-tigh text-zinc-50">
            Enoque Souza
            <br/>
            <span className="font-medium text-[13px] text-zinc-400">
            {`English (native) | Portuguese (native)`}
            </span>
            </h1>
            <p className="max-w-md text-3x1 leading-8 text-zinc-400">
            Software Developer 
            <br/>
            <span className="font-medium text-zinc-50">
                Junior React & Typescrit | Basic MySql
            </span>
            <br/>
            <br/>
            <span className="font-medium text-3x1 text-zinc-50">
                Experience in Ecommerce & Performance
            </span>
            <br/>
            <br/>
            <a
            href="https://github.com/mellamoeterno"
            className="font-medium text-zinc-400 hover:text-black transition-colors"
            >
                GitHub
            </a>
            </p>
        </div>
    )
}
