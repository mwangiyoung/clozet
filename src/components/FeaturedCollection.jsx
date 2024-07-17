function FeaturedCollection({img,title,price,cart,setCart}){
    return(
        
            <div className=" group">

<div className="bg-gray-200 w-[350px] h-[400px] flex  items-center justify-center relative ">
<img src={img} width={250}/>
<button className="border bg-[#45c9a1] border-solid py-2 px-[4em] absolute  bottom-0 hidden group-hover:block text-white rounded-lg" >ADD TO CART</button>
</div>
<div>
<div className="text-center text-2xl">

    <p className="flex items-center justify-center gap-9">{title} <img src="src/assets/images/heart.png" width={20} /></p>
    <p className="flex items-center justify-center">{price}</p>
        </div>
        <div className="">
       
        </div>
        </div>

  </div>

    )
    }
    export default FeaturedCollection