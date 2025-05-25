import Button from "../UiLib/Button";

export default function Navbar(){
  return(
    <div className="fixed z-10 w-full mt-[50px] flex justify-center">

        <div className="w-[60vw] h-[58px] bg-white rounded-lg drop-shadow-lg flex  justify-between pl-5 pr-3 items-center">

          <div className="font-geistsans font-bold text-[20px]">
            🌱   Eco<span className="text-[#00AA14]">Chain</span>
          </div>

          <div className="flex text-[18px] md:gap-5 justify-between font-poppins">

            <div>Home</div>
            <div>EcoMart</div>
            <div>Vision</div>
          </div>


          <div>
            <Button height="40px" width="120px" text={"Get Started"} bgcolor="#00AA14" textcolor="white"  />
          </div>

        </div>
    
    </div>
  )
} 