import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return <section id="about" className='c-space section-spacing'>
    <h2 className='text-heading'>
      About <span className="text-terminal">Me</span>
    </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
      {/* Grid-1 */}
      <div className='grid-1 grid-default-color flex items-end'>
        <img src="og_assets/coding-pov.png" className='absolute scale-[0.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
        <div className='z-10'>
          <p className='headtext'>Hi, I'm Khushal Nirwal</p>
          <p className='subtext'>
              I've built a strong foundation in machine learning, deep learning, and linux.
              I develop end-to-end AI solutions and data-driven applications that translate theory into practice.
          </p>
        </div>
       <div className='absolute inset-x-0 pointer-events-none -botoom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo'></div>
      </div>
      {/* Grid-2  */}
      <div className = "grid-default-color grid-2">
        <div ref={grid2Container} className='relative flex items-center justify-center w-full h-full'>
          <p className='flex items-end text-5xl text-text-dim'>Data Beats Opinions</p>
          <Card
              style={{ rotate: "45deg", top: "30%", left: "20%" }}
              text="Data Analysis"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Data Engineering"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "60deg", bottom: "30%", left: "70%" }}
              text="Fine Tuning"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Gen-AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="RAG"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/purple_logos/chatgpt.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/purple_logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/purple_logos/pytorch.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "15%", left: "10%" }}
              image="assets/logos/purple_logos/tensorflow.png"
              containerRef={grid2Container}
            />

        </div>
      </div>
      {/* Grid 3  */}
      <div className='grid-black-color grid-3'>
        <div className="z-10 w-[50%]">
          <p className="headtext">Time <span className="text-lavender">Zone</span></p>
          <p className="subtext">I'm based in Bhubaneswar, India, and open to remote work worldwide</p>
        </div>
        <figure className="absolute left-[30%] top-[10%]">
          <Globe/>
        </figure>
      </div>
      {/* Grid 4  */}
      <div className='grid-special-color grid-4'>
        <div className = 'flex flex-col items-center justify-center gap-4 size-full'>
          <p className='text-center headtext text-terminal'>Let's Talk!</p>
          <CopyEmailButton/>
        </div>
      </div>
      {/* Grid 5  */}
      <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%]">
          <p className="headtext">Tech <span className="text-lavender">Stack</span></p>
          <p className="subtext">
            Proficient in a diverse range of modern frameworks and tools dedicated to building reliable, production-ready software.
          </p>
        </div>
        <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
          <Frameworks />
        </div>
      </div>

    </div>
  </section>
}

export default About