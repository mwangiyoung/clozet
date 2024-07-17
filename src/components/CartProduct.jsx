import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
function CartProduct({
  img,
  title,
  size,
  price,
  cart,
  setCart,
  setCartCopy,
  cartCopy,
}) {
  const handleDelete = (product) => {
    const items = cart.filter((item)=>item.title !== title);
    setCart(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  function handleCartAction(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartCopyItemIndex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartCopyItemIndex, 1);
      setCartCopy(cartCopyItems);
    }
  }

  return (
    <div className="group">
      <div className="">
        <div className="flex justify-around items-center w-[90%] gap-10 border-b-2 py-[68px] ">
          <div className="flex w-[20%] gap-4">
            <img src={img} className="w-[40%]" />
            <div>
              <p>{title}</p>
              <p>{size}</p>
            </div>
          </div>
          <div className="flex border-2 px-[15px] text-[20px] gap-2">
            <button
              disabled={
                cartCopy.filter((item) => item.title === title).length === 1
              }
              onClick={() =>
                handleCartAction("decrement", { title, img, price })
              }
              className=" "
            >
              -
            </button>
            <h2 className="border-l-2 border-r-2 px-[10px]">
              {cartCopy.filter((item) => item.title === title).length}
            </h2>
            <button
              onClick={() =>
                handleCartAction("increment", { title, img, price })
              }
              className=""
            >
              +
            </button>
          </div>
          <p>
            {`ksh.${cartCopy
              .filter((item) => item.title === title)
              .reduce(
                (acc, curr) =>
                  acc +
                  parseInt(curr.price.replace("ksh", "").replace(",", "")),
                0
              )
              .toLocaleString()}`}{" "}
          </p>
          <RiDeleteBin6Line
            onClick={handleDelete}
            size={20}
            className="  cursor-pointer hidden group-hover:block text-red-700"
          />
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
