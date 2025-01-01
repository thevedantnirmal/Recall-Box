import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import { InputComponent } from "./InputComponent"

export const CreatContentModal=({open,onClose})=>{
    return(
        <div>
            {open && <div className="w-screen h-screen bg-black opacity-65 fixed left-0 top-0 flex justify-center items-center">
                <div className="bg-white rounded-md flex flex-col px-4 py-2 ">
                   <div onClick={onClose} className="flex justify-end py-4"> 
                    <CloseIcon/>

                   </div>
                   <InputComponent placeholder="Title"/>
                   <InputComponent placeholder="Link"/>
                   <div className="flex justify-center">
                    <Button varient="primary" text="Add"/>
                   </div>
                   

                </div>
                </div>}
        </div>
    )
}