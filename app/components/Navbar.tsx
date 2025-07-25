import Button from "../UiLib/Button";

export default function Navbar(){
  return(
    <div className="fixed z-10 w-full mt-[40px] flex justify-center">
        <div className="w-[80%] sm:w-[70%] md:w-[55vw] h-[58px] bg-white/60 backdrop-blur-lg border-1 border-black/5 rounded-lg drop-shadow-lg flex  justify-between pl-5 pr-3 items-center">
          <div className="font-geistsans font-bold sm:text-[16px] md:text-[20px]">
            🌱   Eco<span className="text-[#00AA14]">Chain</span>
          </div>
          <div className="hidden sm:flex sm:text-[13px] md:text-[18px] sm:gap-4 md:gap-7 justify-between font-poppins ">
            <div className="hover:text-green-700 cursor-pointer">Home</div>
            <div className="hover:text-green-700 cursor-pointer">EcoMart</div>
            <div className="hover:text-green-700 cursor-pointer">Vision</div>
          </div>
          <div>
            <Button size="lg" text={"Get Started"} bgcolor="#00AA14" textcolor="white"  />
          </div>
        </div>
    </div>
  )
}