import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import iconbir from "../assets/icon1.png"
import iconiki from "../assets/icon2.png"
import iconuc from "../assets/icon3.png"
import { BsUiChecks } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiMetaLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { IoEyeSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";


const Services = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section id="services" className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-10 container mx-auto">
      <div data-aos="zoom-in" data-aos-delay="400" className=" bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center items-center gap-20 rounded-3xl aos-init aos-animate">
        <div className="flex flex-col justify-center items-start gap-6" >
          <img src={iconbir} alt="item-icon" className="size-24" />
          <h1 className="text-[26px] text-white font-semibold font-poppins">Dijital Pazarlama Strateji Planı</h1>
          <p className="font-poppins text-[18px] text-slate-200 ">İşletmenin hedef kitlesine, ihtiyaçlarına, hedeflerine ve bütçesine uygun olarak özelleştirilmiş bir dijital pazarlama strateji planı hazırlıyoruz.</p>
          <span className=" text-nextupblue font-poppins font-semibold text-[38px] flex justify-center items-center gap-3 "><BsUiChecks /></span>
        </div>
        <div className="flex flex-col justify-center items-start gap-6" >
          <img src={iconiki} alt="item-icon" className="size-24" />
          <h1 className="text-[26px] text-white font-semibold font-poppins">Meta Ads Reklam Yönetimi</h1>
          <p className="font-poppins text-[18px] text-slate-200 ">Meta reklam hizmeti ile Instagram ve Meta (facebook) olmak üzere iki farklı platformda kitlenin ilgi alanlarına yönelik etkili reklam kurgularıyla yüksek satışlar yapmana yardımcı oluyoruz.</p>
          <span className=" text-nextupblue font-poppins font-semibold text-[38px] flex justify-center items-center gap-3 "><RiMetaLine /> <ImFacebook2 /> <BsInstagram /></span>
        </div>
        <div className="flex flex-col justify-center items-start gap-6" >
          <img src={iconuc} alt="item-icon" className="size-24" />
          <h1 className="text-[26px] text-white font-semibold font-poppins">Google Ads Reklam Yönetimi</h1>
          <p className="font-poppins text-[18px] text-slate-200 ">Tıklama başına ödeme (PPC) modeli sayesinde Google Ads uzmanlarımız hedef kitleye uygun anahtar kelime araştırması ve reklamlarla pazarlama bütçeni etkili bir şekilde yönetir.</p>
          <span className=" text-nextupblue font-poppins font-semibold text-[38px] flex justify-center items-center gap-3 "><FaGoogle /> <SiGoogleads /></span>
        </div>
        <div className="flex flex-col justify-center items-start gap-6" >
          <img src={iconbir} alt="item-icon" className="size-24" />
          <h1 className="text-[26px] text-white font-semibold font-poppins">Arama Motoru Optimizasyonu (SEO)</h1>
          <p className="font-poppins text-[18px] text-slate-200 ">Site içi SEO, site dışı SEO ve doğru içerik stratejileri ile sitenin arama motoru sonuç sayfalarında üst sıralarda konumlandırılmasını ve trafiğinin atmasını sağlar.</p>
          <span className=" text-nextupblue font-poppins font-semibold text-[38px] flex justify-center items-center gap-3 "><IoEyeSharp /> <BsSearch /></span>
        </div>
      </div>
    </section>
  )
}

export default Services

// {
//   servicesinfo.map((item, index) => (
//     <div key={index} className="flex flex-col justify-center items-start gap-6" >
//       <img src={item.icon} alt="item-icon" className="size-24" />
//       <h1 className="text-[26px] text-white font-semibold font-poppins">{item.title}</h1>
//       <p className="font-poppins text-[18px] text-slate-200 ">{item.about}</p>
//       <button className=" text-nextuporange font-poppins font-semibold text-[18px] flex justify-center items-center gap-3 ">{item.label} <FaArrowRight /></button>
//     </div>
//   ))
// }