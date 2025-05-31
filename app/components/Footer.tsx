
export default function Footer(){

  return(
    <>
        <div className="h-[17vh] sm:h-[32vh] w-full bg-[url('/images/footer.png')] bg-cover flex items-center">

            <div className=" h-full w-[30%] flex flex-col justify-center  items-center">
              <div className="font-geistsans font-bold text-[13px] sm:text-[16px] md:text-[32px]">
            🌱   Eco<span className="text-[#00AA14]">Chain</span>
              </div>
              <div className="font-poppins text-[8px] sm:text-[18px] text-[#024c0b] font-semibold">
                Reduce, Reuse, Recycle
              </div>
            </div>



            <div className="w-[33%] h-full text-[10px] sm:text-[18px] flex flex-col justify-center items-center">
                  <div className="cursor-pointer select-none ">
                  <span className="font-semibold mb-4">IMPORTANT</span>

                    <div className="opacity-70 hover:opacity-100">HELP</div>
                    <div className="opacity-70 hover:opacity-100">ABOUT</div>
                    <div className="opacity-70 hover:opacity-100">STATUS</div>
                    <div className="opacity-70 hover:opacity-100">FEATURES</div>
                    <div className="opacity-70 hover:opacity-100">SUSTAINABIdivTY</div>
                  </div>
            </div>






            <div></div>

        </div>
    </>
  )
}