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

const Hero = () => {
  return (
    <>
    <Landing/>
    {/* <AdminPanel/> */}
   <QuickLinksSection/>
    <GallerySection/>
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