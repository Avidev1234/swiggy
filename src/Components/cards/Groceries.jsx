export const Groceries =({data})=>{
    const {image,name,idx}=data
    return(
        <>
        <div className="image-container cursor-pointer" key={idx}>
                  <img src={image} alt="" className="responsive-img"/>
                </div>
                <div>
                  <p className="md:w-[69%] w-[99%] flex justify-center"><strong>{name}</strong></p>
                </div>
        </>
    )
} 