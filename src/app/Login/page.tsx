'use client'
import { Input } from "@/components/ui/input";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../utils/firebaseConfig";
import { useState } from "react"


export default function Login(){
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    const Login = () => {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
      }

    return(
        <div className="flex flex-col justify-center items-center my-10">
            <div
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 text-center py-4">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Login</h3>
       <Input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="w-full mt-2" />
       <Input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" className="w-full mt-2" />
        <button type="button"
          className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">Login</button>
      </div>
    </div>
        </div>
    )
}