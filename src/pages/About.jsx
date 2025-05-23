export const About =() =>{
	return(
		<div className="relative w-full">
			<img
				src="../../src/assets/images/about-banner-image-scaled.webp"
				alt="About Banner"
				className="w-full"
			/>

			<div className="absolute inset-0 flex flex-col justify-center items-center text-[20px] h-[30vh]">
				<h3><strong>About Us</strong></h3>

				<div>
				<p>Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>

				</div>
			</div>
			<div className="absolute left-0 top-30 transform -translate-y-1/2 p-2">
				<img src="../../src/assets/images/about-banner-left-arrow.webp" alt="Left Arrow" />
			</div>

				<div className="absolute right-0 top-30 transform -translate-y-1/2 p-2">
					<img src="../../src/assets/images/about-banner-right-arrow.webp" alt="Right Arrow" />
				</div>
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="w-full absolute  bottom-140 transform-translate-y-1/2 p-2 flex justify-center items-center gap-10">
              <div className="w-[10%] mt-30">
                <img src="../../src/assets/images/food.webp" alt="" />
              </div>
              <div className="w-[10%]">
                <img src="../../src/assets/images/instamart-1-282x300.webp" alt="" />
              </div>
              <div className="w-[10%] mt-30">
                <img src="../../src/assets/images/minis-1-283x300.webp" alt="" />
              </div>
            </div>
            <div className="w-full absolute  bottom-145 transform-translate-y-1/2 p-2 flex justify-center items-center">
              <div className="w-[10%] mb-[-504px]">
                <img src="../../src/assets/images/food.webp" alt="" />
              </div>
              <div className="w-[10%] mb-[-250px]">
                <img src="../../src/assets/images/swiggy-sign-198x300.webp" className="" alt="" />
              </div>
              <div className="w-[10%] mb-[-400px] mt-30">
                <img src="../../src/assets/images/minis-1-283x300.webp" alt="" />
              </div>
            </div>
          </div>
	</div>

	)
}
