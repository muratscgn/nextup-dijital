import { FaArrowUp, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneVolume, FaYoutube } from "react-icons/fa"
import { IoIosMailOpen } from "react-icons/io"
import logo from "../assets/logo.png"
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <section className="w-full bg-black">
      <div className="m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10 container mx-auto">

        <div className="flex flex-col justify-center items-start gap-10 ">
          <h1 className="text-white font-semibold font-poppins text-[40px] leading-[50px] ">Birlikte Çalışmaya Başlamak İçin İletişime Geçin!</h1>
          <button className="bg-nextuporange px-6 py-4 rounded-full text-[17px] font-semibold font-poppins hover:bg-white hover:text-black ">Hemen İletişime Geç</button>
        </div>

        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-poppins font-semibold">İletişim bilgileri</h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3"><FaMapMarkerAlt className="text-nextuporange size-8" /><span className="text-[16px] font-poppins text-slate-100 ">İstanbul / Arnavutköy</span></p>
            <p className="flex justify-center items-center gap-3"> <FaPhoneVolume className="text-nextuporange size-8" /><span className="text-[16px] font-poppins text-slate-100 ">+90 546 796 32 22</span></p>
            <p className="flex justify-center items-center gap-3"><IoIosMailOpen className="text-nextuporange size-8" /><span className="text-[16px] font-poppins text-slate-100 ">nextupdijital@gmail.com</span></p>
            <p className="flex justify-center items-center gap-3"><FaClock className="text-nextuporange size-8" /><span className="text-[16px] font-poppins text-slate-100 ">09:00 - 19:00</span></p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-2xl font-poppins font-semibold">Blog Bültenimize abone olun</h1>
          <p className="text-slate-100 font-poppins text-[16px]">Dijital Pazarlama ile ilgili günce blog yazılarımızı kaçırmamak için ücretsiz abone olabilirsiniz.</p>
          <div className="flex flex-col justify-center items-start gap-6 w-full">
            <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-poppins" />
            <button className="bg-nextuporange px-6 py-4 rounded-xl text-[17px] font-semibold font-poppins hover:bg-white hover:text-black ">Abone Ol</button>
          </div>
        </div>
      </div>


      <section className=" m-auto border-y-2 border-slate-600 ">

        <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 p-2">
          <div>
            <h1 className="text-white text-[17px] font-poppins text-center ">NextUp Dijital © 2024, Tüm Hakları Saklıdır</h1>
          </div>

          <div className="flex lg:flex-row flex-col justify-between items-center">
            <img src={logo} alt="logo" />
          </div>

          <div className="flex lg:justify-end justify-center items-center gap-4">
            <FaFacebook className="text-nextuporange size-8" />
            <FaInstagram className="text-nextuporange size-8" />
            <FaYoutube className="text-nextuporange size-8" />
            <FaLinkedin className="text-nextuporange size-8" />
          </div>
        </div>

      </section>

      <div id="icon-box" className="bg-nextuporange text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to="hero" spy={true} offset={-100} smooth={true} ><FaArrowUp className="w-[35px] h-[35px]"></FaArrowUp></Link>

      </div>

    </section>
  )
}

export default Footer