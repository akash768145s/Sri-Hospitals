import React from "react";
import Hero from "../components/Home/Hero";
import Focus from "../components/Home/Focus";
import About from "../components/Home/About";
import Department from "../components/Home/Department";
import Teams from "../components/Home/Teams";
import PatientCare from "../components/Home/PatientCare";
import Achievements from "../components/Home/Achievements";
import Footer from "../components/Home/Footer";
import ContactSection from "../components/Home/Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <Focus />
      <About />
      <Department />
      <Teams />
      <PatientCare />
      <Achievements />
      <ContactSection />
    </>
  );
};

export default Home;
