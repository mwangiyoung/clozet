import Herosection from "../components/Herosection";
import Categories from "../components/Categories";
import FeaturedCollections from "../components/FeaturedCollections";
import Casuals from "../components/Casuals";
import CartProducts from "../components/CartProducts";

function Home(cart,setCart){
return(

<div>
    <Herosection/>
    <Categories/>
    <FeaturedCollections cart={cart} setCart={setCart}/>
    <Casuals/>

</div>
)
}
export default Home;