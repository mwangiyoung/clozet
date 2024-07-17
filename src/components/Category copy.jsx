

function Category({img,title,price}){
    return(
        <div>

        <div className="bg-gray-200 w-[100px] h-[100px] flex rounded-full items-center justify-center ">
<img src={img} width={50}/>
            
        </div>
        <div className="text-center">

            <p>{title}</p>
            <p>{price}</p>
        </div>
        </div>
    )
}
export default Category