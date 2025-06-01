
export default function Scroll(){
  return (
    <>

    <div className="h-[14vh] sm:h-[16vh]  mt-2 sm:mt-2 mb-26 md:gap-4 w-full flex flex-col justify-evenly items-center">

      <div className="flex justify-center sm:mt-10 text-[16px] sm:text-[20px] text-gray-500  font-raleway font-semibold">
        In Collaboration with
      </div>

      <div className=" flex items-center w-[80vw] sm:w-[44vw] md:w-[60vw] justify-around align-middle">

        <div className="bg-[url('/images/droplet.png')] h-8 w-8 sm:h-16 sm:w-16 bg-center bg-cover"></div>
        <div className="bg-[url('/images/tata.png')] h-8 w-8 sm:h-16 sm:w-16  bg-center bg-cover"></div>
        <div className="bg-[url('/images/larsen.png')] h-10 w-14 sm:h-20 sm:w-28 bg-center bg-cover"></div>
        <div className="bg-[url('/images/makein.png')] h-8 w-8 sm:h-16 sm:w-16 bg-center bg-cover"></div>
        <div className="bg-[url('/images/pyramid.png')] h-8 w-8 sm:h-16 sm:w-16 bg-center bg-cover"></div>
      </div>

    </div>

    
    </>
  )
}