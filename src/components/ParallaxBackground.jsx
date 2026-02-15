import { motion, useTransform, useScroll, useSpring } from 'motion/react'
import React from 'react'

const BASE_URL = import.meta.env.BASE_URL;

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll()
    const x = useSpring(scrollYProgress, { damping: 50 })
    // when replace pictures, change the damping to 50 for more smooth effect
    const bg2Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const bg3Y = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const bg4Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const bg5Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background Layer 1 */}
            <div
            className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${BASE_URL}assets/city/1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            {/* Background Layer 2  */}
            <motion.div
            className='absolute inset-0 w-full h-screen -z-40'
            style={{
                backgroundImage: `url(${BASE_URL}assets/city/2.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: bg2Y
            }}
            />
            {/* Background Layer 3 */}
            <motion.div
            className='absolute inset-0 w-full h-screen -z-30'
            style={{
                backgroundImage: `url(${BASE_URL}assets/city/3.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: bg3Y,
            }}
            />
            {/* Background Layer 4 */}
            <motion.div
            className='absolute inset-0 w-full h-screen -z-20'
            style={{
                backgroundImage: `url(${BASE_URL}assets/city/4.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: bg4Y,
            }}
            />
            {/* Background Layer 5*/}
            <motion.div
            className='absolute inset-0 w-full h-screen -z-20'
            style={{
                backgroundImage: `url(${BASE_URL}assets/city/5.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: bg5Y,
            }}
            />

        </div>
    </section>
  )
}

export default ParallaxBackground