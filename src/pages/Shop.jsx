import { FaSearch } from "react-icons/fa";
import Designs from "../components/Designs";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Shop({cart,setCart, buttonContent, setButtonContent}){
  console.log(buttonContent)
  // console.log(cart)
 
  
    return(
        <div className="container mx-auto">
        <div className="input border border-[#45c9a1] rounded-full flex items-center flex-wrap pl-6 ">
          <IoSearchSharp size={30} />
          <input
            className="p-10 flex-1 outline-none  "
            type="text"
            placeholder="search products and categories  "
            />
            <div className="border-l-2 border-gray-700"></div>
            
            <select className="text-center p-4 bg-transparent outline-none">
            <option value=""></option>
            <option value="">Jackets</option>
            <option value="">Handbag</option>
            <option value="">Tshirts</option>
            <option value="">Dress</option>
            <option value="">Jeans</option>
            <option value="">Shoes</option>
            <option value="">Sweater</option>
          </select>
        </div>
        <div>
<Designs cart={cart}setCart={setCart} buttonContent={buttonContent} setButtonContent={setButtonContent}/>

        </div>
        
        <div className="flex items-center justify-center group ">
    <div className=" hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl"><IoIosArrowBack size={40} className="text-gray-400 cursor-pointer"/></div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">1</div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">2</div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">3</div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">4</div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">5</div>
<div className="text-gray-400 hover:bg-[#45c9a1] rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl"><IoIosArrowForward size={40} className="text-gray-400 cursor-pointer"/></div>
    </div>


</div>
        
    )
    
}
export default Shop