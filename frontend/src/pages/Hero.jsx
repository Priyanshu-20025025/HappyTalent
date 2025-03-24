import React from 'react'
// import heroBg from "../assets/heroBg.jpg"
import CoursesSection from '../components/CourseSections'
import AboutUsSection from '../components/AboutUsSection'
import ConnectSection from '../components/ConnectSection'
import NoticeBoardSection from '../components/NoticeBoard'
import JoinUsSection from '../components/JoinUsSection'
import ShareAppSection from '../components/ShareApp'
import GallerySection from '../components/GallerySection'
import ContactForm from '../components/ContactForm'
import Landing from './Landing'
import MembershipSignupSection from '../components/MembershipSignupSection'
import QuickLinksSection from '../components/QuickLinksSection'
import DonateSection from '../components/DonateCardSection'
import AboutUsDetailSection from '../components/AboutUsDetailSection'

const Hero = () => {
  return (
    <>
    <Landing/>
    {/* <AdminPanel/> */}
    {/* <AboutUsDetailSection/> */}
   <QuickLinksSection/>
    <GallerySection/>
    <DonateSection/>
     <CoursesSection />
     <AboutUsSection />
     <ConnectSection />
     <NoticeBoardSection />
     <JoinUsSection />
     <ShareAppSection />
     {/* <ContactUsSection /> */}
    <ContactForm/>
    </>
  )
}

export default Hero