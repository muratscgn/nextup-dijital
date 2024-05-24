import { useState } from "react"
import { FaXmark, FaBars } from "react-icons/fa6"
import { Link } from "react-scroll"
import navLogo from "../assets/nav-logo.png"


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: "Ana Sayfa", path: "home"
    },
    {
      link: "Hİzmetlerİmİz", path: "services"
    },
    {
      link: "Hakkımızda", path: "about"
    },
    {
      link: "İletİşİm", path: "contact"
    },
  ]

  return (
    <nav className="w-full bg-black flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <img src={navLogo} alt="" />

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {
          navItems.map(({ link, path }) => (
            <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-nextuporange hover:text-black font-poppins text-[15px]" to={path} spy={true} offset={-100} smooth={true} >
              {link}
            </Link>
          ))
        }
      </ul>

      <button className="bg-nextuporange font-poppins hover:bg-white text-black px-2 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden ">Hemen Görüşelim</button>

      {/* Mobil Menu Start */}
      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-white text-3xl cursor-pointer" /> : <FaBars className="text-white text-3xl cursor-pointer" />}
        </div>
      </div>

      <div className={`${isMenuOpen ? "flex" : "hidden"} w-full h-fit bg-black p-4 absolute top-[72px] left-0 `} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {
            navItems.map(({ link, path }) => (
              <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-nextuporange hover:text-black w-full text-center" to={path} offset={-100} smooth={true}>
                {link}
              </Link>
            ))
          }
        </ul>
      </div>
    </nav >
  )
}

export default Header