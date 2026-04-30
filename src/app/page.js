import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import TechStack from "@/components/TechStack";
import Skills from "@/components/TechStack";

export default function Home() {
  return (
    <div className="">

      <div className="">
        <Banner />
      </div>

      <div className="">
        <About />
      </div>

      <div className="">
        <TechStack />
      </div>

      <div className="">
        <Projects />
      </div>

      <div className="">
        <Contact />
      </div>

    </div>
  )
}
