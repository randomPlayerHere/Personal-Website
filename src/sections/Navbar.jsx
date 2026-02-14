import { useState } from 'react'
import { motion } from "motion/react"
function Navigation(){
    return(
        <ul className='nav-ul'>
            <li className='nav-li'>
                <a className='nav-link' href="#home">Home</a>
            </li>
            <li className='nav-li'>
                <a className='nav-link' href = "#about">About</a>
            </li>
            <li className='nav-li'>
                <a className='nav-link' href = "#work">Work</a>
            </li>
            <li className='nav-li'>
                <a className='nav-link' href = "#contact">Contact</a>
            </li>
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/60 border-b border-white/5'>
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a 
                href = "#home"
                className="text-xl font-bold transition-colors text-terminal hover:text-terminal-dim hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
                    Khushal
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-text-muted hover:text-terminal focus:outline-none sm:hidden transition-colors">
                    <img src={isOpen? "og_assets/close.svg":"og_assets/menu.svg"} className="w-6 h-6" alt="toggle"/>
                </button>
                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>
            </div>
        </div>
        {isOpen && (
            <motion.div className="block overflow-hidden text-center sm:hidden"
                initial={{opacity:0, x:-10}}
                animate = {{opacity:1, x:0}}
                style={{maxHeight: "100vh"}}
                transition={{duration:1}}
            >
            <nav className="pb-5">
                <Navigation/>
            </nav>
        </motion.div>
        )}
    </div>
  )
}

export default Navbar
