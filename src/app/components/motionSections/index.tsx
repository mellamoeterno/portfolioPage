"use client"
import { Profile } from "../../components/motionSections/profileSection"
import { Amazon } from "../../components/motionSections/amazonSection"
import { Shein } from "../../components/motionSections/sheinSection"
import { Footer } from "../../components/motionSections/footer"

function SectionType() {}

export const Section = Object.assign(SectionType, {
    ProfileSection: Profile,
    AmazonSection: Amazon,
    SheinSection: Shein,
    FooterSection: Footer,

}) 