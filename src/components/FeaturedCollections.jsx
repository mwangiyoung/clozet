import FeaturedCollection from "./FeaturedCollection";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Brownleatherjacket from "../assets/images/leather-jacket.png"
import Roundedneckjacket from "../assets/images/sweatshirts.png"
import PleatedPallazoTrousers from "../assets/images/pallazo.png"
import DeniJacket from "../assets/images/denim.png"

function FeaturedCollections({cart,setCart}){
return(
    <div> 
        <h2 className="text-center font-semibold text-3xl mt-10"> Featured Collection</h2>
      
        <div className=" flex items-center justify-between mt-8 flex-wrap">
        <IoIosArrowBack className="text-gray-400 " size={50}/>
<FeaturedCollection img={Brownleatherjacket} title="Brown leather jacket" price="ksh 2,250"  cart={cart} setCart={setCart} />
<FeaturedCollection img={Roundedneckjacket } title=" Rounded neck jacket" price="ksh 2,000"cart={cart} setCart={setCart}/>
<FeaturedCollection img={PleatedPallazoTrousers} title="Pleated Pallazo Trousers" price="ksh 1,800" cart={cart} setCart={setCart}/>
<FeaturedCollection img={DeniJacket} title="M-22 Denim Jacket "price="ksh 1,250"cart={cart} setCart={setCart}/>

<IoIosArrowForward size={50} className="text-gray-400"/>

</div>
    </div>
)
}
export default  FeaturedCollections;