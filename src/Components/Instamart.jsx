import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme-css'
import "slick-carousel/slick/slick-theme.css";

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
    ],
  };
  return (
    <div className="w-[80%] mx-auto sm:text-[10px] md:text-[18px]">
      <h2>
        <strong>Shop groceries on Instamart</strong>
      </h2>
      <Slider {...settings}>
        <div >
          <img
            src="../../src/assets/images/Maggi.webp"
            alt=""
            style={{width:"200px", marginTop:"20px", display:"flex", gap:"10px"}}
          />
        </div>
        <div>
          <img
            src="../../src/assets/images/veg-magie.jpg"
            alt=""
            style={{width:"200px" ,marginTop:"20px", display:"flex" ,gap:"10px"}}
          />
        </div>
        <div>
          <img
            src="../../src/assets/images/chicken-insta.png"
            alt=""
            style={{width:"200px" ,marginTop:"20px" ,display:"flex" ,gap:"10px"}}
          />
        </div>
        <div>
          <img
            src="../../src/assets/images/handi-chicken.jpg"
            alt=""
            style={{width:"200px" ,marginTop:"20px" ,display:"flex" ,gap:"10px"}}
          />
        </div>
        <div>
          <img
            src="../../src/assets/images/veg-rolls.jpg"
            alt=""
            style={{width:"200px" ,marginTop:"20px" ,display:"flex" ,gap:"10px"}}
          />
        </div>
      </Slider>
    </div>
  );
};
