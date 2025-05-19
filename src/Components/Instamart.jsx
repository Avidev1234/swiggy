import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme-css'
import "slick-carousel/slick/slick-theme.css";
import "./responsive.css";
import instamart from "../Api/instamart.json"
import { Groceries } from "./cards/Groceries";
export const Instamart = () => {
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
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768, // Small screens (phones, tablets)
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024, // Medium screens (tablets, small laptops)
				settings: {
					slidesToShow: 4,
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
				breakpoint: 2562, // Large screens (desktops)
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 2690, // Large screens (desktops)
				settings: {
					slidesToShow: 5,
				},
			}
		],
	};
	return (
		<div className="w-[95%] lg:mx-auto sm:text-[10px] md:text-[18px] md:w-[80%] md:mx-auto p-[14px]">
			<h2 className="md:text-[24px]">
				<strong>Shop groceries on Instamart</strong>
			</h2>
			<Slider {...settings}>
			{
			  instamart.map((dataimage,idx)=>(
				<Groceries key={idx} data={dataimage}/>
            // 	return(
            //   <>
            //     <div className="image-container cursor-pointer" key={idx}>
            //       <img src={dataimage.image} alt="" className="responsive-img"/>
            //     </div>
            //     <div>
            //       <p className="md:w-[69%] w-[99%] flex justify-center"><strong>{dataimage.name}</strong></p>
            //     </div>
            // </>
            //   )
			  ))
	    }

		</Slider>
		</div>
		);
};
