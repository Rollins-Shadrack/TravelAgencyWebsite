import { Link } from "react-scroll"
import logo from '../assets/hilink-logo.svg'
import { useEffect, useState } from "react"
import { NAV_LINKS } from "../constants/index"
import user from '../assets/user.svg'

// react Icons
import {FaBars, FaXmark} from 'react-icons/fa6'
import Button from "./Button"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    //set Toogle Menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () =>{
            window.addEventListener('scroll', handleScroll)
        }
    })
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 overflow-x-hidden">
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} width={79} height={29} alt="" /></a>

                {/* Navbar Items for large Screens */}
                <ul className="md:flex space-x-12 hidden cursor-pointer">
                    {NAV_LINKS.map(({link,path}) => <Link key={path} to={path} spy={true} smooth={true} offset={-100} className='block text-base text-gray-30 hover:text-brandPrimary first:font-medium'>{link}</Link>)}
                </ul>

                {/* Large screen buttons */}
                <div className="space-x-12 hidden lg:flex items-center">
                    <Button type='button' icon={user} className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey" title="Login"/>
                </div>

                {/* menu btn for mobile devices only */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-brandPrimary focus:text-gray-500">
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 '/>) : (<FaBars className='h-6 w-6'/>)
                        }
                    </button>
                </div>
            </div>
            {/* Nav Items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 cursor-pointer bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {NAV_LINKS.map(({link, path}) => <Link key={path} to={path} spy={true} smooth={true} offset={-100} className="block text-base text-white hover:text-brandPrimary first:font-medium">{link}</Link> )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar