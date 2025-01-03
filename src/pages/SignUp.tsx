import { InputHTMLAttributes, useRef } from "react"
import { Button } from "../components/ui library/Button"
import { InputComponent } from "../components/ui library/InputComponent"
import axios from "axios"

export const SignUp=()=>{
    const usernameRef=useRef<HTMLInputElement>()
    const passwordRef=useRef<HTMLInputElement>()
    const handleSignUp=async ()=>{
        const username=usernameRef.current.value
        const password=passwordRef.current.value
       await axios.post("http://localhost:3000/api/v1/signup",{
            username:username,
            password

        })
        alert("You ahve signed up")
    }
    return(
        <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col bg-white rounded-md p-6">
            <h1 className="text-2xl font-bold">Sign Up</h1>

                <InputComponent placeholder="Username" reference={usernameRef} />
                <InputComponent placeholder="Pasword" reference={passwordRef}/>
                <div className="flex justify-center ">
                    <Button onClick={handleSignUp} varient="primary" text={"Submit"} fullWidth={true} isLoading={true}/>
                </div>
            </div>

        </div>
    )
}