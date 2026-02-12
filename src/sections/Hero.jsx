import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas } from "@react-three/fiber"
import { Computer } from "../components/Computer"
import { useMediaQuery } from "react-responsive"
import { Float} from "@react-three/drei"
import { Suspense } from "react"
import Loader from "../components/Loader"

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853})
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallaxBackground/>
        <figure
        className="absolute inset-0"
        style={{width: "100vw", height: "100vh"}}
        >
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <Suspense fallback={<Loader/>}>
              <Float speed={1} rotationIntensity={0.5} floatIntensity={0.0}>
                <Computer 
                scale={isMobile ? 4 : 5} 
                position={isMobile ? [0, -2.0, 0] : [2.5, -1.5, 0]}/>
              </Float>
            </Suspense>
          </Canvas>
        </figure>
    </section>
  )
}

export default Hero