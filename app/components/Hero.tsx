import Button from "../UiLib/Button";

export default function Hero(){
  return(
    <>
      
     <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-[url('/images/gradient.png')] h-[96vh] w-[98vw] rounded-3xl flex justify-center items-center">

          <div className="flex flex-col items-center mt-12 h-[90vh] ">
            <div className="h-[700px] bg-fuchsia-300">

            </div>
                <div className="font-raleway flex flex-col justify-center items-center text-[42px] gap-0  font-semibold mt-10">
                  <div>Turn Waste into Wealth </div>
                  <div>&nbsp; &nbsp; with EcoChain <span className=" h-14 ">🌱</span></div>
                </div>

                <div className="font-Poppins flex flex-col justify-center text-[17px]  font-extralight text-black items-center">
                  <div>Recycle, Earn Eco Tokens, and Shop Sustainably </div>
                  <div>Join the Smart Ecosystem for a Greener Tomorrow.</div>
                </div>


                <div className="flex gap-4 mt-[20px] ">
                  <div >
                    <Button height="35px" width="90px" text={"Sign In"} bgcolor="#00AA14" textcolor="white" />
                  </div>
                  <div>
                    <Button height="35px" width="170px" text={"Explore Marketplace"} bgcolor="white" textcolor="#00AA14" />
                  </div>
                </div>

                <div className="h-[1000px] w-[60vw] mt-30 bg-red-400 rounded-t-2xl">

                  <div className="">

                  </div>

                </div>

          </div>

      </div>
     </div>

        
    </>
  )
}