import { useRef, useState } from "react"
import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import { InputComponent } from "./InputComponent"
import axios from "axios"

enum contentType{
    youtube="youtube",
    twitter="twitter"
}


export const CreatContentModal=({open,onClose})=>{
    const[type,setType]=useState(contentType.youtube)
    const linkRef=useRef<HTMLInputElement>()
    const titleRef=useRef<HTMLInputElement>()
    const addContent=async()=>{
        const link=linkRef.current?.value;
        const title=titleRef.current?.value;
      const req=  await axios.post("http://localhost:3000/api/v1/content",{
            link,title,type
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        })


    }
    return(
        <div>
            {open && <div className="w-screen h-screen bg-black opacity-70  fixed left-0 top-0 flex justify-center items-center">
                <div className="bg-white rounded-md flex flex-col px-4 py-2 ">
                   <div onClick={onClose} className="flex justify-end py-4"> 
                    <CloseIcon/>

                   </div>
                   <InputComponent reference={titleRef} placeholder="Title"/>
                   <InputComponent reference={linkRef} placeholder="Link"/>
                   <div className="flex justify-center gap-3 py-3">
                    <Button varient="secondary" text={"Youtube"} onClick={()=>setType(contentType.youtube)}/>
                    <Button varient="secondary" text={"Twitter"} onClick={()=>setType(contentType.twitter)}/>

                   </div>
                   <div className="flex justify-center">
                    <Button onClick={addContent} varient="primary" text="Add"/>
                   </div>
                   

                </div>
                </div>}
        </div>
    )
}