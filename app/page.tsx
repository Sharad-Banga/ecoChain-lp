import Frequently from "./components/Frequently";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import ThreeR from "./components/ThreeR";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Scroll/>
    <Main/>
    <ThreeR/>
    <Frequently/>
    </>
  );
}
