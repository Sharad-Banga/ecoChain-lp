
export default function Navbar(){
  return(
    <div className="fixed w-screen mt-[50px] flex justify-center">

        <div className="w-[60vw] h-[60px] bg-white rounded-md drop-shadow-lg flex  justify-between pl-3 pr-3 items-center">

          <div className="font-geistsans font-bold text-[20px]">
            🌱 Eco<span className="text-[#00AA14]">Chain</span>
          </div>

          <div className="flex text-[20px] md:gap-5 justify-between font-poppins">

            <div>Home</div>
            <div>EcoMart</div>
            <div>Vision</div>
          </div>


          <div>
            Button
          </div>

        </div>
    
    </div>
  )
}