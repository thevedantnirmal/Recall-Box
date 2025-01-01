import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"

interface CardProps{
    title:string,
    link:string,
    type:"youtube"|"tweeter"



}

export const Card=({link,type,title}:CardProps)=>{
    return(
        <div className=" bg-white p-5 border-slate-100 border-2 max-w-72 rounded-lg max-h-80 overflow-y-clip">
        <div className=" flex justify-between font-medium">
            <div className="flex items-center">
                <div className="text-gray-500 pr-2">
                <PlusIcon size="md"/>
                </div>
                {title}

            </div>
            <div className="flex justify-center pr-2">
            <div className="text-gray-500" >
                <a href={link} target="_blank">
                <ShareIcon size="md"/></a>
                </div>
                <div className="text-gray-500">
                <PlusIcon size="md"/>
                </div>

            </div>


        </div>
        
        {type=="youtube" && <iframe className="w-full  pt-5"  src={link.replace("watch","embed").replace("?v","/")}
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

         {type=="tweeter"&& <blockquote className="twitter-tweet w-f">
         <a href={link}></a> 
         </blockquote>}
        </div>
    )
}