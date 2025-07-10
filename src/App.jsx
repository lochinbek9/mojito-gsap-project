
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cooktails from "./components/Cooktails";

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () =>{
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Cooktails/>
    </main>
  )
}

export default App
