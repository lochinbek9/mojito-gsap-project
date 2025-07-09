
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import {SplitText} from "gsap/all";

function Hero() {
    useGSAP(() =>{
        const heroSplit = new SplitText(".title", {type: "chars, words"});
        const paragraphSplit = new SplitText(".subtitle", 
            {type: "lines"});
    }, [])
  return (
    <>
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-lear" className="left-leaf" />

            <img src="/images/hero-right-leaf.png" alt="right-lear" className="right-leaf" />
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic</p>
                        <p className="subtitle">
                            Sip the Spirit <br />
                            of Summer
                        </p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                        Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                        <br />
                        
                        </p>
                        <a href="#cocktails">View cocktails</a>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Hero