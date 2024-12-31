interface ButtonProps{
    varient:"primary"|"secondary",
    size:"sm"|"md"|"lg",
    text:String,
    startIcon?:any,
    endIcon?:any,
    onClick:()=>void

}
const varientStyles={
    "primary":"bg-purple-500 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}
const defaultStyle="rounded-md "
const sizeStyle={
    "sm":"py-2 px-4",
    "md":"py-3 px-6",
    "lg":"py-4 px-8"
}

export const Button=(props:ButtonProps)=>{
    const {varient,size,text,onClick,startIcon,endIcon}=props
    //const color=varient=="primary"?"blue-300":"blue-100"
    //const buttonSize=size=="lg"?"p-22":size=="sm"?"p-8":size=="md"?"p-14":"p-4"
    //const 
    return(
        <button onClick={onClick} className={`${defaultStyle} ${varientStyles[varient]} ${sizeStyle[size]} `}>
            <div className="flex items-center">
           {startIcon?<div className="pr-2">{startIcon}</div>:null}  {text} {endIcon}
           </div>
            

        </button>
    )

}