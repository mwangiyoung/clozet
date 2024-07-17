import Casual from "./Casual";
import mens from "./../assets/images/mens.png";
import watches from "./../assets/images/watches.png";
import bags from "./../assets/images/hbags.png";
import ladies from "./../assets/images/ladies.png";

    function Casuals() {
        return (
          <div className=" container mx-auto grid grid-cols-2 grid-rows-[300px_300px_300px] gap-6">
            <Casual
              img={mens}
              title="Casual Collection"
              h2="Men’s Collection"
              classes="row-start-1 row-end-3 bg-[#F0EFEF]"
            />
            <Casual
              img={watches}
              title="Casual Collection"
              h2="Luxury Watches"
              classes="bg-[#E3F9FB]"
            />
            <Casual
              img={bags}
              title="Casual Collection"
              h2="Designer Handbags"
              classes="bg-[#FFF1F1]"
            />
            <Casual
              img={ladies}
              title="Casual Collection"
              h2="Ladies Collection"
              classes="row-start-2 row-end-4 bg-[#FEDBDB]"
            />
          </div>
        );
      
      
}
export default Casuals