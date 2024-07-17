import { RiArrowRightSFill } from "react-icons/ri";


function Casual({ img, h2, classes ,title}) {
    return (
      <div className={` flex  flex-col ${classes}`}>
        <div className={`flex items-end h-[100%] `}>
          <div>
            <p  className="text-gray-500 text-xl">
            {title}
            </p>
            <p className="text-3xl font-semibold">{h2} </p>
          
            <p  className="flex items-center gap-5">Shop Now <RiArrowRightSFill size={40}/>
</p>

          </div>
          <div className="h-[100%]"><img src={img} className="h-[100%] object-fill" /></div>
        </div>
      </div>
    );
  }
  export default Casual
