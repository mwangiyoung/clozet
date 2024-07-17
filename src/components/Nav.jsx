import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav({cart}) {

  return (
    <nav className="flex-col sm:flex-row">
      <div className="container mx-auto flex  justify-between flex-col sm:flex-row">
        <ul className="flex  gap-9 items-center">
          <img src="src/assets/images/logo.svg"></img>
          <Link to="/"> <li className=" hidden md:block">Home</li></Link>
          <Link to="/About US">   <li className=" hidden md:block">About Us</li></Link>
         <Link to="/shop">  <li className=" hidden md:block">Shop</li></Link>
        </ul>
        <ul className="flex gap-7  items-center relative ">
    <Link to="/cart"> <IoCartOutline className="size-10 cursor-pointer"/></Link> 
    <span className=" cursor-pointer w-[20px] h-[20px] bg-[#45c9a1] text-white rounded-full flex items-center justify-center absolute top-0 left-8">{ cart? cart.length:0}</span>  
        <Link to="/register">  <li>Sign Up</li></Link>
          <Link to="/Login">  <button className=" border border-black py-4 px-[4em] rounded-full cursor-pointer "> Login</button> </Link>
        <FaBars className="sm:hidden" />
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
