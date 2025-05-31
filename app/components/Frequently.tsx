"use client"

import { useState } from "react"
import Expendable from "../UiLib/Expendable";



export default function Frequently(){
const [expanded, setExpanded] = useState([false,false,false,false,false]);

const tog=(num:number)=>{

  setExpanded(prev=>{

    const newData = [...prev];
    newData[num]= !newData[num];
    return newData;
  })

}


  return(
    <div className="select-none flex justify-center w-full h-full items-center mt-10 mb-10 sm:mt-30 sm:mb-30">
        <div className="w-[76vw] h-[90%] flex flex-col justify-center items-center bg-[#53E26452] rounded-xl pb-6 sm:pb-14">
          <div className="text-[#1B5E20] font-semibold md:text-[36px] font-poppins mt-4 mb-4 sm:mt-8 sm:mb-8">
            Frequently Asked questions
          </div>
          <Expendable exp={expanded[0]} onClick={()=>tog(0)} que="Q : How do I earn Eco Tokens?"  ans="You earn Eco Tokens by submitting waste at partner centers, sharing approved upcycling ideas, or completing eco challenges. Proof of action (photo or QR scan) is required." />

          <Expendable exp={expanded[1]} onClick={()=>tog(1)} que="Q : What can I do with Eco Tokens?"  ans="You can redeem Eco Tokens in our rewards marketplace for sustainable product discounts, coupons, or donate them to community causes."/>

          <Expendable exp={expanded[2]} onClick={()=>tog(2)} que=" Q : Do I need to pay to use Eco Chain?"  ans="No, Eco Chain is completely free to use! Our goal is to promote sustainable living by rewarding positive actions."/>

          <Expendable exp={expanded[3]} onClick={()=>tog(3)} que=" Q : How do I submit an upcycling idea?"  ans="Go to the Submit Idea section, add your description, upload images and materials used. Our AI assistant will help optimize your submission before final review."/>
          <Expendable exp={expanded[4]} onClick={()=>tog(4)} que="Q : Can I sell my upcycled products here?"  ans="Yes! You can list handmade upcycled products in our marketplace and reach eco-conscious buyers looking for sustainable alternatives."/>
        </div>
    </div >
  )
}