import React, { useState } from 'react'
import heroBg from "../assets/heroBg.jpg"
import MembershipSignupSection from '../components/MembershipSignupSection'
const Landing = () => {
  const [ switchMode , setSwitchMode] =  useState(false)
  const handleOpenModal = () =>{
    setSwitchMode(true)
  }
  const handleCloseModal = () =>{
    setSwitchMode(false)
  }
  return (
   <div>
     <section id="hero" className="relative py-24 md:py-36 bg-orange-50"> {/* Default Tailwind Orange */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Students Learning"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-5"></div> {/* Default Tailwind Orange */}
      </div>
      <div className="container mx-auto px-4 relative text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">"घंटों की पढ़ाई, मिनटों में याद!"</h1> {/* Default Tailwind Orange */}
        <p className="text-lg md:text-xl mb-8">Unlock your learning potential with engaging digital courses.</p>
        <button type='button' onClick={handleOpenModal} className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"> {/* Default Tailwind Orange */}
          Apply For Membership
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
     
    </section>
    {
      switchMode && <MembershipSignupSection close={handleCloseModal}/>
    }
   </div>
  )
}

export default Landing