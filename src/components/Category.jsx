import jacket from "../assets/images/jacket.png"

function Category({img,title}){
    return(
        <div>

        <div className="bg-gray-200 w-[100px] h-[100px] flex rounded-full items-center justify-center ">
<img src={img} width={50}/>
            
        </div>
        <div className="text-center">

            <p>{title}</p>
        </div>
        </div>
    )
}
export default Category