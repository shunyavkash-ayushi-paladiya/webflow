// app/page.js
"use client"; 

import "@splidejs/react-splide/css";
import About from "./components/About";
import Cards from "./components/Cards"
import Twocolumn from "./components/Twocolumn";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Slider/>
      <Cards />
      <Twocolumn />
    </>
  );
}
