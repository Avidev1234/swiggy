import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import citiesData from "../Api/cities.json";

export const City = () => {
  const allCities = Object.values(citiesData).flat(); // Flatten all cities into one array
  // console.log("allCities",allCities);
  
  const [showAll, setShowAll] = useState(false); // Toggle state

  // Show either all cities or only the first 10
  const citiesToShow = showAll ? allCities : allCities.slice(0, 10);

  return (
        <div className="lg:w-[68%] lg:mx-auto flex flex-col md:gap-4 mt-10 p-4 sm:w-[100%] mx-auto">
          <strong>
            <p className="text-[26px]">Cities for food Delivery</p>
          </strong>
              <div className="w-full xl:flex  gap-4 md:flex-wrap md:none">
                {citiesToShow.map((city, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-md p-2">
                    Order food online in {city}
                  </div>
                ))}

                <div className="w-[225px] border-2 border-gray-200 rounded-md p-2 cursor-pointer flex items-center gap-2 text-[#ff5200]" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Show Less" : "Show More"}{" "}
                  {showAll ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
              </div>
        </div>
  );
};
