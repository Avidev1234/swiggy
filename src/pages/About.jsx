import Aos from 'aos';
import { useEffect } from 'react'
import "aos/dist/aos.css";
export const About =() =>{
	useEffect(()=>{
Aos.init({duration:1200})
	})
	return(
		<>
		    <div className="relative w-full " data-aos="fade-up">
          <img
            src="../../src/assets/images/about-banner-image-scaled.webp"
            alt="About Banner"
            className="w-full"
              />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-[40px] h-[30vh]" data-aos="fade-up">
            <h3><strong>About Us</strong></h3>

            <div className="text-[25px] text-gray-400">
            <p>Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>

            </div>
          </div>
          <div className="absolute left-0 top-30 transform -translate-y-1/2 p-2" data-aos="fade-up">
            <img src="../../src/assets/images/about-banner-left-arrow.webp" alt="Left Arrow" />
          </div>

            <div className="absolute right-0 top-30 transform -translate-y-1/2 p-2" data-aos="fade-up">
              <img src="../../src/assets/images/about-banner-right-arrow.webp" alt="Right Arrow" />
            </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center" data-aos="fade-up">
                <div className="w-full absolute  bottom-140 transform-translate-y-1/2 p-2 flex justify-center items-center gap-10" data-aos="fade-up">
                  <div className="w-[10%] mt-30">
                    <img src="../../src/assets/images/food.webp" alt="" />
                  </div>
                  <div className="w-[10%]" data-aos="fade-up">
                    <img src="../../src/assets/images/instamart-1-282x300.webp" alt="" />
                  </div>
                  <div className="w-[10%] mt-30" data-aos="fade-up">
                    <img src="../../src/assets/images/minis-1-283x300.webp" alt="" />
                  </div>
                </div>
                <div className="w-full absolute  bottom-145 transform-translate-y-1/2 p-2 flex justify-center items-center" data-aos="fade-up">
                  <div className="w-[10%] mb-[-504px]" data-aos="fade-up">
                    <img src="../../src/assets/images/food.webp" alt="" />
                  </div>
                  <div className="w-[10%] mb-[-250px]" data-aos="fade-up">
                    <img src="../../src/assets/images/swiggy-logo.png" className="" alt="" />
                  </div>
                  <div className="w-[10%] mb-[-400px] mt-30" data-aos="fade-up">
                    <img src="../../src/assets/images/minis-1-283x300.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center' data-aos="fade-up">
                <div className='line-through text-orange-400' data-aos="fade-up"></div>
                <h3 className="flex items-center justify-center text-[20px] font-semibold text-orange-500" data-aos="fade-up">
                  <span className="relative px-4 before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-[-20%] after:right-[-20%] before:w-[50px] after:w-[50px] before:border-t before:border-orange-400 before:border-2 after:border-t after:border-orange-400 after:border-2 text-[40px] uppercase">
                    get to know us
                  </span>
                </h3>
                <div className='line-through text-orange-400' data-aos="fade-up"></div>
              </div>
        </div>
                <div className='w-[70%] mx-auto  flex justify-between p-4' data-aos="fade-up">
                  <div className='w-[30%] flex flex-col gap-15  p-4' data-aos="fade-up">
                    <div className='border-b-2 p-4' data-aos="fade-up">
                      <p>Mission</p>
                    </div>
                    <div className='border-b-2 p-4' data-aos="fade-up">
                      <p>Vision</p>
                    </div>
                    <div className='border-b-2 p-4' data-aos="fade-up">
                      Value
                    </div>
                  </div>
                  <div className='w-[70%]  p-4 flex justify-between' data-aos="fade-up">
                    <div className='w-[50%]  p-4 ' data-aos="fade-up">
                      <p className='text-[18px] text-gray-400 mt-18' data-aos="fade-up">Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.</p>
                    </div>
                    <div className='w-[50%]  p-4 flex gap-4 transform transition-transform duration-300 hover:scale-105' data-aos="fade-up">
                      <img src="../../src/assets/images/Mission.png" alt="" className=''/>
                    </div>
                  </div>
                </div>
	</>
	)
}
