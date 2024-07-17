import Category from "./Category"
import Jacket from "../assets/images/jacket.png"
import Handbag from "../assets/images/handbag.png"
import Shirt from "../assets/images/tshirt.png"
import Dress from "../assets/images/dress.png"
import Jeans from "../assets/images/jeans.png"
import Shoes from "../assets/images/shoe.png"
import Sweater from "../assets/images/sweater.png"
function Categories(){
    return(
        <div className="container mx-auto">


      <h2 className="text-center font-semibold text-3xl">Top Categories </h2>
      <div className=" flex items-center justify-between mt-8 flex-wrap">

          <Category img={Jacket} title="Jacket"/>
          <Category img={Handbag } title="Handbag "/>
          <Category img={Shirt} title="Shirt" />
          <Category img={ Dress} title=" Dress"/>
          <Category img={Jeans} title="Jeans"/>
          <Category img={Shoes} title="Shoes"/>
          <Category img={Sweater} title="Sweater"/>
      </div>
        </div>
    )
}
export default Categories