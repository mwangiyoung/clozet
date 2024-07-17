import CartProducts from "../components/CartProducts";

function Cart({ children,cart,setCart ,cartCopy}) {
  console.log(cart)
    return (
      <div>
        <CartProducts cart={cart} setCart={setCart} cartCopy={cartCopy} />
      </div>
    );
  }
  export default Cart;