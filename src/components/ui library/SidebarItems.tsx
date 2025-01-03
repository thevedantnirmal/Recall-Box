import { ReactElement } from "react"

export const SideBatItems=({icons,text}:{
    icons:ReactElement,
    text:string
})=>{
    return(
        <div className="flex mt-5 hover:bg-slate-400 transition max-w-44 mx-5">
            <div className="px-5 text-slate-950 "> {icons}</div>
            <div className="font-medium">{text}</div>
        
        </div>
    )
}