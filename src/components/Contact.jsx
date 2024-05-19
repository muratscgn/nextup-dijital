import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import contactimg from "../assets/contact.png"

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section id="contact" className=" w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 container mx-auto">
      <div className="lg:w-[50%] w-full">
        <img data-aos="zoom-in" data-aos-delay="200" src={contactimg} alt="contactimg" />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl " >
        <h1 className="text-white text-[45px] font-semibold font-poppins ">Hemen Ücretsiz Ön Görüşme Ayarlayalım!</h1>
        <div id="form-box" className="w-full bg-transparent flex flex-col justify-center items-center gap-4">
          <input type="text" placeholder="İsminiz" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-poppins " />

          <div className="w-full flex justify-center items-start gap-4">
            <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-poppins" />

            <input type="number" placeholder="Telefon Numaranız" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-poppins" />
          </div>

          <input type="text" placeholder="Şirket İsminiz" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-poppins " />

          <button className="bg-nextuporange px-6 py-4 w-full rounded-md font-semibold font-poppins text-md">Gönder</button>

        </div>
      </div>

    </section>
  )
}

export default Contact