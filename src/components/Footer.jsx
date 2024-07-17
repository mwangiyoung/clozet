function Footer() {
  return (
    <footer className="bg-gray-100 py-10 flex-col sm:flex-row">
      <div className="container mx-auto">
        <div className="text-center flex-col sm:flex-row sm:mr-9 ">
          <h2 className="text-5xl">Subscribe & get up to 30% OFF</h2>
          <div className="mt-10">
            <input
              className=" mr-6 border border-[#45c9a1] border-solid py-5 px-[5em] rounded-full"
              type="text"
              placeholder="Enter your email"
            ></input>
            <button className="border bg-[#45c9a1] border-solid py-4 px-[4em] rounded-full text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex-col sm:flex-row flex justify-between items-center mt-10">
          <div>
            <img className="mb-6" src="src/assets/images/logo.svg"></img>
            <p className="text-2xl">
              Offering a unique and stylish perspective on
              <br />
              fashion is our number
              <br />
              one priority. Confuse
              <br />
              your mirror by our
              <br />
              trendy outfits.
            </p>
          </div>
          <div>
            <h2 className=" font-bold">Store</h2>
            <ul className="font-sans text-2xl">
              <li className="py-4 ">Women’s Fashion</li>
              <li className="py-4">Men’s Fashion</li>
              <li className="py-4">Store Sale</li>
              <li className="py-4">Collections</li>
            </ul>
          </div>
          <div>
            <h2 className=" font-bold">Help</h2>
            <ul className="font-sans text-2xl">
              <li className="py-4">Customer Support</li>
              <li className="py-4">Terms& Conditions</li>
              <li className="py-4">Privacy Policy</li>
              <li className="py-4">Track Your Order</li>
            </ul>
          </div>

          <ul className="font-sans text-2xl">
            <h2 className="mb-5">Contact Us</h2>
            <div className="flex justify-between items-center gap-5 py-4">
              <img className="w-[30px]" src="src/assets/images/email.png" />
              <li>contact@clozzet.com</li>
            </div>
            <div className="flex  items-center gap-5 py-4">
              <img className="w-[30px]" src="src/assets/images/phone.png" />
              <li>254-700-333-333</li>
            </div>
            <p className="mt-6"> Follow Us</p>
            <div className="flex justify-between items-center">
              <img className="w-[35px] " src="src/assets/images/facebook.png" />
              <img className="w-[35px]" src="src/assets/images/instagram.png" />
              <img className="w-[35px]" src="src/assets/images/twitter.png" />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
