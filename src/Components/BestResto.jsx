import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme-css'
import "slick-carousel/slick/slick-theme.css";
import { GoCheckbox } from "react-icons/go";
import { GiCakeSlice } from "react-icons/gi";
import res from "../Api/res.json"
import { Dineout } from "./cards/Dineout";
export const BestResto = () => {
  const settings = {
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 360, // Small screens (phones, tablets)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (phones, tablets)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens (tablets, small laptops)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440, // Large screens (desktops)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1880, // Large screens (desktops)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 2560, // Large screens (desktops)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2685, // Large screens (desktops)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2690, // Large screens (desktops)
        settings: {
          slidesToShow: 4,
        },
      }
    ],
  };
  return (
    <div className="w-[85%] mx-auto sm:text-[10px] md:text-[18px] mt-10">
      <h2 className="md:text-[24px] ">
        <strong>Discover best restaurants on Dineout</strong>
      </h2>
      
      <Slider {...settings}>

        {
      res.map((resApi,idx)=>(
    
          <Dineout data={resApi} key={idx}/>
        // <div className=" max-w-sm rounded overflow-hidden shadow-lg mt-10" key={idx} >
        //   <img
        //     className="w-full"
        //     src={resApi.image}
        //     alt="Sunset in the mountains"
        //   />
        //   <div className="font-bold text-xl mb-2 relative bottom-16 right-0 text-white ">
        //     <strong>{resApi.resName}</strong>
        //   </div>
        //   <div className="px-2  py-2 w-full flex justify-between gap-[50px]">
        //     <div className="w-[50%]">
        //       <p className="text-gray-800 font-bold text-base text-[12px] font-serif">
        //        {resApi.resName}
        //       </p>
        //       <p className="text-gray-800 font-bold text-base text-[12px] font-serif">
        //         {resApi.address.substring(0,50)+'....'}
        //       </p>
        //       <div className="w-full flex gap-2 mt-2">
        //         <div className="font-bold text-[10px] text-gray-800 mr-2 mb-2 flex gap-1 ">
        //           <GoCheckbox />
        //           <p className="mt-[-1px] text-[8px] font-serif hover:underline cursor-pointer">
        //             <strong>Table booking</strong>
        //           </p>
        //         </div>
        //         <div className="font-bold text-[10px] text-gray-800 mr-2 mb-2 flex gap-1 ">
        //           <GiCakeSlice />
        //           <p className="mt-[-1px] text-[8px] font-serif hover:underline cursor-pointer">
        //             <strong>Free Desert</strong>
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="w-[50%]">
        //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 float-right">
        //         &#8377;{resApi.price} for two
        //       </span>
        //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 float-right">
        //         {resApi.distance} km
        //       </span>
        //     </div>
        //   </div>
        //   <div className="w-full flex px-[10px]  py-[10px]  justify-center flex-col gap-2">
        //     <button className=" bg-green-500 text-[15px] hover:bg-green-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded cursor-pointer">
        //       Flat 20% off on pre-booking&nbsp;&nbsp;&nbsp; +3 more
        //     </button>
        //     <button className=" bg-green-100 text-[15px]  text-blue-700 font-semibold  p-2 border border-green-500  rounded cursor-pointer">
        //       Flat 20% off on pre-booking&nbsp;&nbsp;&nbsp; +3 more
        //     </button>
        //   </div>
        // </div>
        
      ))

        }
       
        
      </Slider>
    </div>
  );
};
