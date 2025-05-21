import { MdKeyboardArrowDown } from "react-icons/md";
import citiesData from "../Api/cities.json";
import { useState } from "react";
import { GroseryCity } from "./cards/GroseryCity";

export const Grocery = () => {
	const allCities = Object.values(citiesData).flat(); // Flatten all cities into one array
// console.log("allCities",allCities);

const [showCity,setshowcity]=useState(false);
const show=showCity ? allCities : allCities.slice(0,10);
	return (
		<>
			<div>
				<div className="lg:w-[68%] lg:mx-auto mx-auto flex flex-col gap-4 mt-10 p-4">
					<strong>
					<h1 className="text-[26px]">Cities for grocery Delivery</h1>
					</strong>

					<div className="w-full xl:flex  gap-4 md:flex-wrap md:none">
					    {
						show.map((cities, index) => (
                                <GroseryCity data={{cities,index}} key={index}/>
                        ))}
                        <div className="w-[225px] border-2 border-gray-200 rounded-md p-2 cursor-pointer flex items-center gap-2 text-[#ff5200]" onClick={()=>setshowcity(!showCity)}>
                            {showCity ? "Show Less" : "Show More"}{" "}
                            {showCity ? <MdKeyboardArrowDown /> : <MdKeyboardArrowDown />}
                        </div>
	                </div>
		        </div>
	        </div>
	</>
	);
};
