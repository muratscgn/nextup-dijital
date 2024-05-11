import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import about from "../assets/about2.png"
import { FaChevronCircleRight } from 'react-icons/fa'


const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section id='about' className=' w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 container mx-auto'>
      <div>
        <img data-aos="zoom-in" data-aos-delay="200" src={about} alt="about" className='lg:w-[1000px] lg:h-[550px]' />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400">
        <h1 className='text-nextuporange font-poppins text-[19px] font-semibold' >BİZ KİMİZ?</h1>
        <h1 className='text-black font-semibold lg:text-[50px] text-[40px] lg:leading-[70px] leading-[60px] font-poppins'>Aile Şirketi Olan Bir Dijital Pazarlama Ajansı</h1>
        <p className='font-poppins text-[20px] text-slate-700'>Biz Murat ve Şeyma Seçgin Dijital Pazarlama Danışmanları olarak, Aile ajansımızda 2 kişilik dev kadro ile dijital başarıya rehberlik ediyoruz. </p>

        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-black flex justify-center items-center gap-4 font-poppins pt-4'><FaChevronCircleRight className='text-nextuporange size-6' />Kültürümüzün temelinde başarı dolu, uzun vadeli ve sürdürülebilir iş birlikleri yatıyor.</p>
          <p className='text-black flex justify-center items-center gap-4 font-poppins'><FaChevronCircleRight className='text-nextuporange size-6' />Hedeflerinize ulaşabilmeniz için dijital araçları efektif bir şekilde kullanıyoruz.</p>
          <p className='text-black flex justify-center items-center gap-4 font-poppins'><FaChevronCircleRight className='text-nextuporange size-6' />Veriye dayalı ve hedef odaklı çözümlerimizle sürdürülebilir başarılar sağlıyoruz.</p>
          <p className='text-black flex justify-center items-center gap-4 font-poppins'><FaChevronCircleRight className='text-nextuporange size-6' /> Amacımız, markalarımıza daha fazla değer katmak ve başarılarını artırmaktır.</p>
        </div>
      </div>
    </section>
  )
}

export default About