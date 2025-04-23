import Slider from "react-slick";
import vegfood from "../Api/orderbest.json";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme-css'
import "slick-carousel/slick/slick-theme.css";
import "./responsive.css"
export const Responsive = () => {
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
					slidesToShow: 4,
				},
			}
		],
	};
	return (
		<div
			style={{

				gap: "15px",

				padding: "14px",
				marginTop: "20px",
			}}
			className="lg:m-auto md:w-[80%] sm:w-[80%] md:mx-auto"
		>
			<h2 className="xl:text-[25px] sm:text-[10px] md:text-[18px]">
				<strong>Order our best food options</strong>
			</h2>
			<Slider {...settings}>
				{
					vegfood.map((dataimage,idx)=>{
						return(
			<>
				<div className="image-container cursor-pointer" key={idx}>
						<img src={dataimage.image} alt="" className="responsive-img"/>
				</div>
				<div>
					<p className="w-[99%] md:w-[69%] flex justify-center"><strong>{dataimage.name}</strong></p>
				</div>
			</>
	)
	})
	}
	</Slider>
	</div>
	);
};
