import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { counts } from "../export";

const Counter = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section className=" w-[90%] m-auto lg:flex-row flex-col justify-between items-center gap-28 py-10 container mx-auto">
      <div data-aos="zoom-in" data-aos-delay="200" className="border-8 border-black w-full lg:p-15 p-10 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl ">
        {
          counts.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-6">
              <div className="h-20">
                <img className="w-20" src={item.logo} alt="" />
              </div>
              <p className="text-nextuporange font-poppins text-l font-semibold">{item.title}</p>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Counter