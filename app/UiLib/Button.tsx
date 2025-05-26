interface ButtonInter{
  size : "sm"|"md"|"lg",
  bgcolor:string,
  textcolor:string,
  text:string
}

interface sizeInter{
  sm : string,
  md : string,
  lg : string
}

const sizeObj : sizeInter = {

  "sm" : "s",
  "md" : " h-[35px] pl-3 pr-3",
  "lg" : "h-[40px] w-[120px]"

}



export default function Button(props:ButtonInter){

  return(
    <>
       <div
         className={`drop-shadow-2xl flex items-center justify-center rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${sizeObj[props.size]}`}
         style={{ backgroundColor: props.bgcolor, color: props.textcolor }}
       >
        {props.text}
       </div>
    </>
  )
}