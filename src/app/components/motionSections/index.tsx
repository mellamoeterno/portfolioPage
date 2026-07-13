'use client'
import { Profile } from "../../components/motionSections/profileSection"
import { Amazon } from "../../components/motionSections/amazonSection"

function SectionType() {
    return (
    <main 
    className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    </main>
    )
}

export const Section = Object.assign(SectionType, {
    ProfileSection: Profile,
    AmazonSection: Amazon,

}) 