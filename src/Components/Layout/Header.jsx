import "./sign.js";
import { SigninForm } from "./SigninForm.jsx";
export const Header = () => {
	return (
		<>
			<div className="w-full bg-[#ff5200]">
				<div className="w-[90%] mx-auto p-10 flex flex-col sm:flex-row justify-between items-center sm:items-start">
					<div className="w-full sm:w-[29%] mb-4 sm:mb-0">
						<div className="w-[35%] mx-auto md:w-[69%] lg:w-[49%] xl:w-[39%]">
							<img
								src="../src/assets/images/Swiggy_logo_bml6he.png"
								alt="Swiggy Logo"
								className="w-full"
							/>
						</div>
					</div>
					<div className="w-full sm:w-[88%] flex flex-col sm:flex-row  justify-end gap-4 gap-4">
						<p className="text-white font-semibold p-2 font-[Gilroy] hover:cursor-pointer text-center sm:text-left">
							Swiggy Corporate
						</p>
						<p className="text-white font-semibold p-2 font-[Gilroy] hover:cursor-pointer text-center sm:text-left">
							Partner with us
						</p>
						<button className="bg-opacity-0 p-2 hover:cursor-pointer text-white font-semibold font-[Gilroy]  -white rounded-md text-md w-full sm:w-auto text-center">
							Get The App
						</button>
						
						<button onClick={loginpopup} className="bg-black p-2 hover:cursor-pointer text-white font-semibold font-[Gilroy] rounded-md text-md w-full sm:w-auto text-center" >
							Sign In
						</button>
            			<SigninForm/>
					</div>
				</div>
				<div className="w-[100%]">
					<div className="h-[450px]! w-[250px]!  absolute top-[57px] left-0 xl:block hidden">
						<img src="../src/assets/images/Veggies_new.avif" alt="" />
					</div>
					<div></div>
					<div className="w-full flex justify-center ">
						<div className="w-[60%] xl:w-[45%] xl:text-[30px] sm:text-[5px] md:text-[15px] ">
							<h1>
								<strong>
									Order food & groceries. Discover best restaurants. Swiggy it!
								</strong>
							</h1>
						</div>
						<div className="h-[450px]! w-[250px]! absolute top-[57px] right-0 xl:block hidden">
							<img src="../src/assets/images/Sushi_replace.avif" alt="" />
						</div>
					</div>

					<div className="mt-[42px] ">
            <form className="max-w-lg mx-auto">
              <div className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg></button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                  </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                  <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
                </div>
            </form>
	        </div>
	    </div>
	<div className="w-[100%]">
		<div className="w-[90%] mx-auto  flex justify-center">
			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img
					className="w-full"
					src="../src/assets/images/delivery.avif"
					alt="Sunset in the mountains"
				/>
			</div>

			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img
					className="w-full"
					src="../src/assets/images/instamart.avif"
					alt="Sunset in the mountains"
				/>
			</div>

			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img
					className="w-full"
					src="../src/assets/images/dineout.avif"
					alt="Sunset in the mountains"
				/>
			</div>

			
		</div>
	</div>
	</div>
	</>
	);
};
const loginpopup=()=>{
  // console.log("test@#@");

  const model=document.getElementById('authentication-modal');
  // console.log(model);
  model.style.display='block'
  
}