
                function Addproduct(){
                    return(
                        <div className="container mx-auto">
                            <h1 className="text-center font-semibold font-sans text-2xl ">Add New Product </h1>
                            <div className="shadow-lg border border-white-100 ">
                            <div  className="border w-[50%] p-[10px] mb-[20px] py-8 m-[45px] " >
                            <input type="lastname"  placeholder="Product Name" required ></input>
                            </div>
                            <div className=" border w-[50%] p-[10px] mb-[20px]  py-8 m-[45px]">
                            <input type="contact"  placeholder="Price" required></input>
                            </div>
                            <div className="flex items-center">
                            <div className=" border w-[30%] p-[10px]  mb-[20px] py-8 m-[45px]  flex items-center justify-between ">
                            <div>Select Category</div>
                            <select type="Select " value="Select Category" required> <option value=""></option>
                            <option value="">Jackets</option>
                            <option value="">Handbag</option>
                            <option value="">Tshirts</option>
                            <option value="">Dress</option>
                            <option value="">Jeans</option>
                            <option value="">Shoes</option>
                            <option value="">Sweater</option> </select>
                            </div>
                            <div className="">
                            <h1>No File Chosen</h1>
                            </div>
                            </div>
                            <div className=" border w-[50%] p-[10px]  py-8 m-[45px]">
                            <textarea name="Detailed product Description" id="10" cols="20" rows="10"> </textarea>
                            </div>
                           
                            <button className="border  justify-center border-gray-400 bg-[#45C9A1] rounded-full text-white px-[4em] py-3 font-bold ">add products</button>
                            
                        </div>
                        </div>
                    )
                }
               
           
     
    
export default Addproduct