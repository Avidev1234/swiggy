export const FooddeliveryCity =({data})=>{
    const {index,city}=data;
return(
    <>
     <div key={index} className="border-2 border-gray-200 rounded-md p-2">
                    Order food online in {city}
                  </div>
    </>
)
}