import Button from "../UiLib/Button";

export default function Hero(){
  return(
    <>
      
     <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-[url('/images/gradient.png')] h-[96vh] w-[98vw] rounded-3xl flex justify-center items-center sm:items-center">
          <div className="flex flex-col items-center   sm:mt-12 h-[80vh] sm:h-[90vh] ">
            <div className="h-[500px] sm:h-[1000px] ">
            </div>
                <div className="font-raleway flex flex-col justify-center items-center  sm:mt-25 text-[24px] sm:text-[36px] md:text-[42px] gap-0  font-semibold mb-2 sm:mb-0">
                  <div>Turn Waste into Wealth </div>
                  <div>&nbsp; &nbsp; with EcoChain <span className=" h-14 ">🌱</span></div>
                </div>
                <div className="font-Poppins flex flex-col justify-center text-[12px] sm:text-[17px]  font-extralight text-black items-center">
                  <div>Recycle, Earn Eco Tokens, and Shop Sustainably </div>
                  <div>Join the Smart Ecosystem for a Greener Tomorrow.</div>
                </div>
                <div className="flex gap-4 mt-[20px] ">
                  <div >
                    <Button size="md" text={"Sign In"} bgcolor="#00AA14" textcolor="white" />
                  </div>
                  <div>
                    <Button size="md"  text={"Explore Marketplace"} bgcolor="white" textcolor="#00AA14" />
                  </div>
                </div>
                <div className="h-[220px] p-2 sm:p-0 w-[77vw] sm:w-[70vw] md:w-[60vw] mt-10 sm:mt-14 md:mt-20 bg-white sm:rounded-b-none flex justify-center items-end rounded-2xl">
                  <div className="h-[200px] sm:h-[210px] w-[75vw]  sm:w-[68vw] md:w-[58vw] bg-[#C3FFCB]  bg-cover sm:mt-2 md:mt-4 rounded-2xl sm:rounded-b-none  flex flex-col justify-between items-center">
                        <div className="w-[96%] mt-[24px] h-[30%] bg-[#E0FFE4] rounded-xl flex justify-start items-center pr-2  hover:rotate-x-0 transition-transform duration-300">
                            <span className="text-white text-4xl  duration-20 ml-2">✦</span>
                            <div className="text-[30px] opacity-40 ml-4">
                                <div className="font-geistsans font-bold text-[20px]">
                                      🌱   Eco<span className="text-[#00AA14]">Chain</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[96%] h-[46%]   rounded-t-2xl flex gap-[3%]">
                          <div className="bg-[#edffef] h-full w-[50%] rounded-t-2xl hidden sm:flex justify-start items-end backdrop-blur-3xl">   
                            <div className=" opacity-60 text-[35px] animate-pulse ml-1 mb-1"></div>
                          </div>
                          <div className="w-[96%] sm:w-[46%]   h-full flex justify-between">
                              <div className="w-[30%] h-full bg-[#B1EEB9] rounded-t-2xl   z-0  flex flex-col justify-evenly">
                                <div className="w-full ">
                                      <div className="text-white animate-ping ml-8 ">
                                                ✦
                                      </div>         
                                </div>
                                <div className=" w-full h-[23px] rounded-r-2xl flex justify-end transform transition-transform hover:-rotate-4 origin-right">
                                        <div className="bg-[#e5f8e7] h-full w-[70%] rounded-l-md">
                                      </div>
                                </div>
                                <div className=" w-full h-[23px] rounded-r-2xl ">
                                        <div className="bg-[#e5f8e7] h-full w-[66%] rounded-r-md transform transition-transform hover:rotate-4 origin-left">
                                      </div>
                                </div>
                              </div>
                              <div className="w-[30%] h-full bg-[#B1EEB9] rounded-t-2xl flex justify-evenly">
                                <div className="h-full  w-[23px] flex items-end origin-bottom hover:scale-y-220 transition-transform duration-200">
                                  <div className="h-[30%] bg-green-900 w-full rounded-t-sm ">
                                  </div>
                                </div>
                                <div className="h-full  w-[23px] flex items-end origin-bottom hover:scale-y-140 transition-transform duration-200">
                                  <div className="h-[63%] bg-green-400 w-full rounded-t-sm">
                                  </div>
                                </div>
                                <div className="h-full  w-[23px] flex items-end origin-bottom hover:scale-y-150 transition-transform duration-200">
                                  <div className="h-[46%] bg-green-600 w-full rounded-t-sm">
                                  </div>
                                </div>
                              </div>
                              <div className="w-[30%] h-full bg-[#B1EEB9] rounded-t-2xl flex flex-col justify-evenly items-center">
                                <div className=" w-[75%] transition-transform transform hover:scale-200  origin-left">
                                  <div className="bg-white h-[10px] w-[10px]  rounded-4xl" >
                                  </div>
                                </div>
                                <div className="bg-white h-[40px] w-[40px] transition-transform transform hover:scale-200 rounded-4xl" >
                                </div>
                              </div>
                          </div>
                        </div>
                  </div>
                </div>
          </div>
      </div>
     </div>
    </>
  )
}