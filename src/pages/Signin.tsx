import { useRef } from "react"
import { Button } from "../components/ui library/Button"
import { InputComponent } from "../components/ui library/InputComponent"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin=()=>{
    const navigate=useNavigate()
    const UsernameRef=useRef<HTMLInputElement>();
    const PasswordRef=useRef<HTMLInputElement>()
    const handleSignin= async()=>{
        const username=UsernameRef.current?.value;
        const password=PasswordRef.current?.value;
        const response=await axios.post("http://localhost:3000/api/v1/signin",{
            password,username
        })
   localStorage.setItem("token",response.data.Token)
  navigate('/dashboard')
    }
    return(
        <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col bg-white rounded-md p-6">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <InputComponent placeholder="Username" reference={UsernameRef}/>
                <InputComponent placeholder="Pasword" reference={PasswordRef}/>
                <div className="flex  justify-between items-center">
                    <Button varient="primary" onClick={handleSignin} size="lg" text={"Submit"} fullWidth={true} isLoading={true}/>
                </div>
            </div>

        </div>
    )
}