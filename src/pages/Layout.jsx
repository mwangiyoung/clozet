import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

function Layout({ children ,cart,setCart, buttonContent, setButtonContent
}) {
console.log(buttonContent)
  return (
    <div>
      <Nav cart={cart} setCart={setCart} buttonContent={buttonContent} setButtonContent={setButtonContent}  />
      <main className="flex min-h-[100vh] flex-col ">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
