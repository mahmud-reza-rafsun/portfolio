import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">

      <div className="">
        <Banner />
      </div>

      <div className="">
        <Skills />
      </div>

      <div className="">
        <Projects />
      </div>

      <div className="">
        <About />
      </div>

      <div className="">
        <Contact />
      </div>

    </div>
  )
}
