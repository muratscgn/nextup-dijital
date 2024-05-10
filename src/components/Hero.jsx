import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import clients from "../assets/clients.png"
import herobanner from "../assets/herobanner.png"


const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 container mx-auto">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" data-aos-delay="" className="text-black font-semibold lg:text-[80px] text-[65px] lg:leading-[100px] leading-[80px] font-poppins ">Dijital Pazarlama Danışmanlığı</h1>
        <p data-aos="zoom-in" data-aos-delay="400" className="font-poppins text-[20px] text-slate-700 ">Meta reklamları, Google Ads ve SEO ile markanızın <br /> hedeflerini yükseltin! <br /> Dijital başarı için bizimle tanışın.</p>
        <button data-aos="zoom-in" data-aos-delay="600" className="bg-nextuporange px-6 py-4 rounded-full text-[17px] font-semibold font-poppins hover:bg-black hover:text-white ">Ücretsiz Ön Görüşme!</button>
        <div data-aos="zoom-in" data-aos-delay="600" className=" flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10">
          <img src={clients} alt="clients" />
          <p className=" font-poppins text-[20px] font-bold text-black">Standartlaşmış Ajanslardan Sıkılan Mutlu Markalar & Müşteriler</p>
        </div>
      </div>
      <div >
        <img data-aos="zoom-in" data-aos-delay="1000" src={herobanner} alt="herobanner" className="lg:w-[750px] lg:h-[550px] aos-init aos-animate" />
      </div>
    </section>
  )
}

export default Hero



