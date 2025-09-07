import AboutUs from "@/components/Home/AboutUS/AboutUs";

import Hero from "@/components/Home/Hero/Hero";
import Highlights from "@/components/Home/Highlights/Highlights";
import Join from "@/components/Home/Join/Join";
import Values from "@/components/Home/Values/Values";




export default function Home() {
  return (
    <div className=" mx-auto  justify-center">
      
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Highlights></Highlights>
      <Values></Values>
      <Join></Join>
      
     
    </div>
  );
}