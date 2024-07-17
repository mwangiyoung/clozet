import { FaSearch } from "react-icons/fa";

function Herosection() {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-7xl font-semibold">
            Choose the look
            <br />
            that <span className="text-[#45c9a1]">suits</span> you best
          </h1>
          <p className="font-sans text-xl mt-7">
            Every day is a fashion show & the world is your runway.
            <br />
            Clozzet will elevate your wardrobe with the best collections.
            <br />
            Be exclusive, Be Devine, Be yourself. Explore outfits that will
            <br />
            make you comfortably beautiful.True style never dies.
            <br />
          </p>
          <button className="border bg-[#45c9a1] border-solid py-4 px-[4em] rounded-full text-white mr-6">
            Shop Now
          </button>
          <button className="border border-solid py-4 px-[4em] rounded-full cursor-pointer mr-5 text-[#45c9a1]">
            About Us
          </button>
          <br />
          <div className=" mr-6 border  border-solid py-5 px-[5em] rounded-full flex items-center gap-6">

          <FaSearch />
          <input
            
            type="text"
            placeholder=" Search"
          />
          </div>
         
        </div>
        <div>
          <img src="src/assets/images/hero-background.png" className="absolute top-0 right-0 z-[-1]" />

          <img src="src/assets/images/hero-image.png" className="mt-30" />
        </div>
      </div>
    </div>
    
  );
}
export default Herosection;
