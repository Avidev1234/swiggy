export const GroseryCity = ({data}) =>{
    const {cities,index}=data
    return (

        <>
        <div key={index} className="border-2 border-gray-200 rounded-md p-2">
									Order food online in {cities}
								</div>
        </>
    )
}