import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchContent=async()=>{
    const [content,setContent]=useState([])
    useEffect((()=>{
        const fun=async()=>{
            const data=await axios.get("http://localhost:3000/api/v1/content",{
                headers:{
                    token:localStorage.getItem("token")
                }
                
            })
            setContent(data)
        }
    fun()}
    ),[])

    

  
    return content


}