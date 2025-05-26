interface ButtonInter{
  height:string,
  width : string,
  bgcolor:string,
  textcolor:string,
  text:string
}



export default function Button(props:ButtonInter){

  return(
    <>
       <div
         className={"drop-shadow-2xl flex items-center justify-center rounded-lg cursor-pointer transition duration-300 transform hover:scale-105"}
         style={{ backgroundColor: props.bgcolor, color: props.textcolor, height: props.height, width: props.width }}
       >
        {props.text}
       </div>
    </>
  )
}