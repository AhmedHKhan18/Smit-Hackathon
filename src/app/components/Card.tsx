'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Card({name, id}:any){
  const router = useRouter()
    return(
        <div
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4" onClick={()=>router.push(`/FormScreen?id=${id}`)}>
      {/* <Link href={'/'}> */}
      <div className="min-h-[205px]">
        <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas</p>
      </div>
      {/* </Link> */}
    </div>
    )
}