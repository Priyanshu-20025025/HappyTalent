import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { Outlet } from "react-router";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional, but good to have here)
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out-quart', // Easing function
      delay: 100, // Delay before animation starts
      once: true, // Whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // Anchor placement
    });
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <>
     <div className="h-full w-full">
     <Header />
      <Outlet />
      <Hero/>
      <Footer />
     </div>
    </>
  );
}

export default App;
