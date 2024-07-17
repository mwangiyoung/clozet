import Design from "./Design"
import BlueRageedJeans from "../assets/images/ragged-jeans.png"
import BrownLeatherJacket from "../assets/images/images/sweatshirts.png"
import SlimBanqueDress from "../assets/images/slim-banquet-dress.png"
import BlueDenimJacket from "../assets/images/images/denim.png"
import LeatherJacket from "../assets/images/images/leather-jacket.png"
import QuartzMensWatch from "../assets/images/quartz-watch.png"
import WomenDenimJeans from "../assets/images/denim-jeans.png"
import UnisexGraphicTshirt from "../assets/images/graphic-tshirts.png"
import Brownhandbag from "../assets/images/hbags.png"
import  BlackBomberJacket  from"../assets/images/bomber.png"
import  PleatedpallazoPants from "../assets/images/images/pallazo.png"
import PureLeatherShoes from "../assets/images/leather-shoes.png"
import PurpleSerpentipurse from "../assets/images/serpenti-forever.png"
import UnisexAirforceSneakers from "../assets/images/unisex.png"
import BlueCocktailDress from "../assets/images/cocktail.png"
import offsholder from "../assets/images/Off-The-Shoulder.png"
import airpants from "../assets/images/Airsense-pleated.png"
import watch from "../assets/images/smartwatch.png"
import BluePlatformHeels from "../assets/images/ZOOSHI-COBALT.png"
import StripKnittedSweater from "../assets/images/knitted-sweater.png"


function Designs( {cart,setCart, buttonContent, setButtonContent}){
    return(
        <div> 
       
          
            <div className=" flex items-center justify-between mt-8 flex-wrap ">
           

    <Design img={BlueRageedJeans} title="Blue Rageed Jeans" price="ksh 2,250" cart={cart} setCart={setCart} buttonContent={buttonContent} setButtonContent={setButtonContent}/>
    < Design img={BrownLeatherJacket } title=" Brown Leather Jacket " price="ksh 2,250" cart={cart} setCart={setCart} buttonContent={buttonContent} setButtonContent={setButtonContent}/>
    < Design img={SlimBanqueDress} title="Slim Banque Dress" price="ksh 10,250"cart={cart} setCart={setCart}/>
    

    <Design img={BlueDenimJacket} title="Brown leather jacket" price="ksh 2,250" cart={cart} setCart={setCart}/>
    < Design img={LeatherJacket} title=" Rounded neck jacket" price="ksh 2,250"cart={cart} setCart={setCart}/>
    < Design img={QuartzMensWatch} title="Pleated Pallazo Trousers" price="ksh 2,250"cart={cart} setCart={setCart}/>
    <Design  img={WomenDenimJeans} title="Women Denim Jeans"price=" ksh 2,250"cart={cart} setCart={setCart}/>
    
    
    <Design img={Brownhandbag} title="Brown hand bag" price="ksh 2,250"cart={cart}setCart={setCart} />
    <Design  img={UnisexGraphicTshirt} title="UnisexGraphicTshirt "price=" ksh 2,250"cart={cart}setCart={setCart}/>
    < Design img={ BlackBomberJacket} title="  Black Bomber Jacket" price=" ksh 2,250"carcart={cart}setCart={setCart}/>
    < Design img={ PleatedpallazoPants} title=" Pleated pallazo Pants" price=" ksh 2,250"cart={cart}setCart={setCart}/>
    <Design  img={ PureLeatherShoes} title=" Pure Leather Shoes "price="kshksh 2,250"cart={cart}setCart={setCart}/>

    <Design img={PurpleSerpentipurse} title="Purple Serpenti purse" price="ksh 2,250"cart={cart}setCart={setCart} />
    < Design img={ UnisexAirforceSneakers} title=" Unisex Airforce Sneakers" price="ksh 2,250"cart={cart}setCart={setCart}/>
    < Design img={BlueCocktailDress} title="Blue Cocktail Dress" price="ksh 2,250"cart={cart}setCart={setCart}/>
    <Design  img={ offsholder} title="Off-Shoulder Crop Top "price=" ksh 2,250"cart={cart}setCart={setCart}/>

    <Design img={airpants} title="Airsense Pleated Pants" price="ksh 2,250" cart={cart}setCart={setCart}/>
    < Design img={watch} title=" Classy Smart Watch" price=" ksh 2,250"cart={cart}setCart={setCart}/>
    < Design img={BluePlatformHeels} title="Blue Platform Heels" price=" ksh 2,250"cart={cart}setCart={setCart}/>
    <Design  img={ StripKnittedSweater } title=" Strip Knitted Sweater "price=" ksh 2,250"cart={cart}setCart={setCart}/>


    
    </div>
        </div>
    )
    }

export default Designs

  