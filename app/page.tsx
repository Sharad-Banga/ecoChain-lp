import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Scroll/>
    </>
  );
}
