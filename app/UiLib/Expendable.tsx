
interface ExpendableInter{
  exp:boolean;
  onClick: ()=>void;
  que: string;
  ans : string;
}

export default function Expendable(props:ExpendableInter){
  return(
    <div className="flex justify-center w-full drop-shadow-xl" onClick={props.onClick}>
        <div className={`${props.exp?"h-[100px]":"h-[70px]"} w-[80%] bg-white text-black flex flex-col justify-center  pb-4 pl-5 pr-5 m-3 rounded-xl `}>

            <div className="flex justify-between items-center pt-4">
              <div className="font-bold font-raleway">
                {props.que}
              </div>
              {props.exp && <div onClick={props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"    stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>}

              

              {!props.exp && <div onClick={props.onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
              </div>}


            </div>


            <div className={`${props.exp?"block":"hidden"} text-[14px] mt-1 transition-transform text-black opacity-75 pl-4`}>
                  {props.ans}
            </div>

        </div>
    </div>
  )
}