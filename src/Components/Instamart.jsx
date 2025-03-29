import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme-css'
import "slick-carousel/slick/slick-theme.css";

export const Instamart = () => {
  return (
    <div className="w-[90%] mx-auto text-[25px]">
      <h2>
        <strong>Shop groceries on Instamart</strong>
      </h2>
      <Slider  
        initialSlide={0}
        infinite={true}
        autoplay={true}
        autoplaySpeed={4000}
        slidesToShow={5}
        dots={true}
        
        >
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
