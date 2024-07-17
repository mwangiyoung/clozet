import { useState } from "react";
import Addproduct from "../pages/Addproduct";
function Design({ img, title, price, cart, setCart,buttonContent, setButtonContent}) {
  const handleAddToCart = (e, product) => {
 


    if (e.target.textContent.toLowerCase() === "add to cart") {
   
      setCart((prev) => [...prev, product]);
      // e.target.textContent = "Remove from cart";

      localStorage.setItem("cart", JSON.stringify(cart));


    } else {
      // e.target.textContent = "ADD TO CART";
      const cartCopy = [];
      cart.filter((item) => {
        if (item.title !== product.title) cartCopy.push(item);
        console.log(item)
       
      });


      setCart(cartCopy);
     
    }
  };
  return (
    <div className=" group">
      <div className="bg-gray-300 w-[350px] h-[500px] flex  items-center justify-center relative gap-6">
        <img src={img} width={500} />


       
        <button
          onClick={(e) => handleAddToCart(e, { title, img, price })}
          

          className="border bg-[#45c9a1] border-solid py-2 px-[4em] absolute  bottom-0 hidden group-hover:block text-white rounded-lg"
        >
           {cart && cart.filter(item=>item.title===title).length===1?"Remove from cart":"Add to cart"}
        </button>
      </div>
      <div>
        <div className="text-center text-2xl gap-6">
          <p className="flex items-center justify-center gap-9">
            {title} <img src="src/assets/images/heart.png" width={20} />
          </p>
          <p className="flex items-center justify-center text-[#45c9a1]">
            {price}
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
export default Design;
