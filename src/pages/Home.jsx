import { BestResto } from "../Components/BestResto"
import { City } from "../Components/City"
import { Grocery } from "../Components/Grocery"
import { Instamart } from "../Components/Instamart"
import { Responsive } from "../Components/Responsive"
import { Sticker } from "../Components/Sticker"

export const Home=()=>{
    return(
        <>
        <Responsive />
        <Instamart />
        <BestResto />
         <Sticker  />
         <City />
         <Grocery /> 
        </>
    )
}