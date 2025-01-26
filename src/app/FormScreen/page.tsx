"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig";

export default function FormScreen() {
  const router = useRouter()
  const [subcategories, setSubCategories] = useState('')
  console.log("🚀 ~ FormScreen ~ subcategories:", subcategories)
  const [loanamount, setLoanamount] = useState('')
  console.log("🚀 ~ FormScreen ~ loanamount:", loanamount)
  const [loanperiod, setLoanperiod] = useState('')
  console.log("🚀 ~ FormScreen ~ loanperiod:", loanperiod)
  const [depositamount, setDepositamount] = useState('')
  console.log("🚀 ~ FormScreen ~ depositamount:", depositamount)
  const [userCnic, setUserCnic] = useState('')
  console.log("🚀 ~ FormScreen ~ userCnic:", userCnic)
  const [userName, setUserName] = useState('')
  console.log("🚀 ~ FormScreen ~ userName:", userName)
  const [userEmail, setUserEmail] = useState('')


  const onSubmit = () => {
    Swal.fire({
      title: "Submit your details",
      html: `
        <input id="swal-input-cnic" class="swal2-input" placeholder="Enter CNIC">
        <input id="swal-input-name" class="swal2-input" placeholder="Enter Name">
        <input id="swal-input-email" class="swal2-input" placeholder="Enter Email">
      `,
      showCancelButton: true,
      confirmButtonText: "Proceed",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const cnic = (document.getElementById("swal-input-cnic") as HTMLInputElement).value;
        const name = (document.getElementById("swal-input-name") as HTMLInputElement).value;
        const email = (document.getElementById("swal-input-email") as HTMLInputElement).value;
    
        if (!cnic || !name || !email) {
          Swal.showValidationMessage("All fields are required!");
          return false; // Prevents modal from closing
        }
    
        try {
          // Example API call or processing (replace with your own logic)
          const response = await fetch(`https://api.github.com/users/${name}`);
          if (!response.ok) {
            throw new Error("Invalid user");
          }
          return { cnic, name, email }; // Return the values
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const { cnic, name, email } = result.value;
        setUserCnic(cnic)
        setUserName(name)
        setUserEmail(email)
        Swal.fire({
          title: "Details Submitted",
          html: `
            <p>CNIC: ${cnic}</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
          `,
          icon: "success",
        });
        router.push('/Login')
      }
    });
    try {
      const docRef = doc(db, "users", userCnic);
       setDoc(docRef, {
        subcategories: subcategories,
        loanamount: loanamount,
        loanperiod: loanperiod,
        depositamount: depositamount,
      });
      console.log("Document successfully written!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Loan Details</CardTitle>
          <CardDescription className="text-center">
            Please fill it with correct data and fill all fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Sub Categories</Label>
            <div className="relative">
            <Select onValueChange={(value:any) => setSubCategories(value)}>
          <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a sub category"/>
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="Valima">Valima</SelectItem>
          <SelectItem value="Furniture">Furniture</SelectItem>
          <SelectItem value="ValimaFood">Valima Food</SelectItem>
          <SelectItem value="Jahez">Jahez</SelectItem>
          </SelectContent>
          </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Loan Amount</Label>
            <div className="relative">
            <Select onValueChange={(value:any) => setLoanamount(value)}>
          <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a loan amount" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="1Lakh">1 Lakh</SelectItem>
          <SelectItem value="2Lakh">2 Lakh</SelectItem>
          <SelectItem value="3Lakh">3 Lakh</SelectItem>
          <SelectItem value="4Lakh">4 Lakh</SelectItem>
          <SelectItem value="5Lakh">5 Lakh</SelectItem>
          </SelectContent>
          </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Loan Period</Label>
            <div className="relative">
            <Select onValueChange={(value:any) => setLoanperiod(value)}>
          <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a loan period" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="1year">1 year</SelectItem>
          <SelectItem value="2year">2 year</SelectItem>
          <SelectItem value="3year">3 year</SelectItem>
          <SelectItem value="4year">4 year</SelectItem>
          <SelectItem value="5year">5 year</SelectItem>
          </SelectContent>
          </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Deposit Amount</Label>
            <div className="relative">
           <Input placeholder="Enter deposit amount" onChange={(e)=>setDepositamount(e.target.value)}/>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

