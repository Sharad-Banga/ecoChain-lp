
export default function Scroll(){
  return (
    <>

    <div className="h-[28vh] mt-10 mb-20  w-full flex flex-col justify-evenly items-center">

      <div className="flex justify-center mt-10 text-[20px] text-green-700 font-poppins font-medium">
        In Collaboration with
      </div>

      <div className="flex items-center w-[44vw] justify-around align-middle">

        <div className="bg-[url('/images/droplet.png')] h-16 w-16 bg-center bg-cover"></div>
        <div className="bg-[url('/images/tata.png')] h-16 w-16 bg-center bg-cover"></div>
        <div className="bg-[url('/images/larsen.png')] h-20 w-28 bg-center bg-cover"></div>
        <div className="bg-[url('/images/makein.png')] h-16 w-16 bg-center bg-cover"></div>
        <div className="bg-[url('/images/pyramid.png')] h-16 w-16 bg-center bg-cover"></div>
      </div>

    </div>

    
    </>
  )
}