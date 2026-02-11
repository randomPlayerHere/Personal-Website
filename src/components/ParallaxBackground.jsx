import React from 'react'

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background Layer */}
            <div
            className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: 'url(/assets/bg_stars_4.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            {/* Far Buildings  */}
            <div
            className='absolute inset-0 w-full h-screen -z-40'
            style={{
                backgroundImage: 'url(/assets/bg_stars_3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            {/* Near Buildings */}
            <div
            className='absolute inset-0 w-full h-screen -z-30'
            style={{
                backgroundImage: 'url(/assets/bg_stars_2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            {/* Foreground Layer */}
            <div
            className='absolute inset-0 w-full h-screen -z-20'
            style={{
                backgroundImage: 'url(/assets/bg_stars_1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            />
            
        </div>
    </section>
  )
}

export default ParallaxBackground