import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  const allCategories = [
    {
        id: 1,
        name: "Wedding Loans",
        img: "https://readymadeui.com/cardImg.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas"
    },
    {
        id: 2,
        name: "Home Construction Loans",
        img: "https://readymadeui.com/cardImg.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas"
    },
    {
        id: 3,
        name: "Business Startup Loans",
        img: "https://readymadeui.com/cardImg.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas"
    },
    {
        id: 4,
        name: "Education Loans",
        img: "https://readymadeui.com/cardImg.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas"
    },
]

  return (
    <div>
      <Header/>
      <div className="flex flex-col justify-center items-center my-10">
                <h1 className="text-5xl font-bold text-blue-500">Welcome to Saylani Microfinance</h1>
                <p className="text-xl font-serif my-2">A Solution for your all finances</p>
                <h1 className="text-3xl font-bold">Select a loan category:</h1>
                <div className="flex mx-4 gap-4">
                {allCategories.map((item, index)=>(
                        <Card name={item.name} id={item.id}/>
                    ))
                }
                </div>
    </div>
    <Footer/>
    </div>
  );
}
