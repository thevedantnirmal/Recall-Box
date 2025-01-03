import { AppLogo } from "../icons/AppLogo"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YotubeIcon } from "../icons/YoutubeIcon"
import { SideBatItems } from "./SidebarItems"

export const Sidebar=()=>{
    return(
        <div className="w-64 h-screen bg-white fixed left-0 top-0 ">
            <div className="flex gap-5 pl-5 pt-7"><div className="text-purple-600"><AppLogo/> </div> 
            <h1 className="text-lg font-bold">Second Brain</h1></div>
            <SideBatItems icons=<TwitterIcon/>  text="twitter"/>
            <SideBatItems icons={<YotubeIcon/>} text={"Youtube"}/>

        </div>
    )
}