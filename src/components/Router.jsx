import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from"../pages/Home.jsx"
import Notfound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Shop from "../pages/Shop.jsx";
import Login from "../pages/Login.jsx";
import Register from"../pages/Register.jsx"
import Addproduct from "../pages/Addproduct.jsx";
import Cart from "../pages/Cart.jsx";
import{Link} from"react-router-dom";
import { useEffect, useState } from "react"; 
function Router(){
    const [cart,setCart]=useState([])
    const [buttonContent, setButtonContent]=useState("Add To Cart")
   
     useEffect(()=>{
    
        //  add item to localStorage
        cart.length !==0 && localStorage.setItem("cart", JSON.stringify(cart))
   
      },[cart])

      useEffect(()=>{
       const cartItems=JSON.parse(localStorage.getItem("cart"))
setCart(cartItems)
      },[])
    // console.log(buttonContent)
    return(<BrowserRouter>
        <Routes>
        <Route path="/"element={<Layout cart={cart} setCart={setCart} ><Home cart={cart}setCart={setCart} /></Layout>}/>
        
        <Route path="*" element={<Notfound/>}/>
        <Route path="/shop"element={<Layout cart={cart} setCart={setCart} buttonContent={buttonContent} setButtonContent={setButtonContent}><Shop cart={cart}setCart={setCart} /></Layout>}/>
        <Route path="/login"element={<Layout><Login/></Layout>}/>
        <Route path="/register"element={<Layout><Register/></Layout>}/>
        <Route path="/addproduct"element={<Layout><Addproduct/></Layout>}/>
        <Route path="/cart"element={<Layout cart={cart} setCart={setCart}><Cart cart={cart}setCart={setCart}/></Layout>}/>
        </Routes>
        
        </BrowserRouter>) 


    
}
export default Router;