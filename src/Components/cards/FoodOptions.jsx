export const FoodOptions= ({data})=>{
      const { image, name,idx } = data;
    return (
        <>
				<div className="image-container cursor-pointer" key={idx}>
						<img src={image} alt="" className="responsive-img"/>
				</div>
				<div>
					<p className="w-[99%] md:w-[69%] flex justify-center"><strong>{name}</strong></p>
				</div>
			</>
    )
}