"use client"
import { RevealSection } from "./components/effects/slidingSection"
import Link from "next/link"
import { Section } from "../app/components/motionSections/index"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black overflow-x-clip">
    {/* profile */}
      <section className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Section.ProfileSection/>

      </section>
    {/* profile */}

    <RevealSection>
      <section className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="">
        <Section.AmazonSection/>
        </Link>
      </section>
    </RevealSection>

    <RevealSection>
      <section className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="https://discord.com/users/826317527578837013">
        <Section.FooterSection/>
        </Link>
      </section>
    </RevealSection>

    </div>
  )
}
