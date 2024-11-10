import Image from "next/image";
import Link from "next/link";


export default function DetailAlto() {
    return(
        <div className=" mt-3">
        <h1 className="text-5xl text-bold underline text-center">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
        <div className=" w-9/12 justify-items-center ">
          <Image className="ml-80 py-5"
            src="/side.jpg"
            alt="alto 2024"
            width={300}
            height={200}
          />
        </div>
  
        <p className="text-center mt-2 px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
  
        <div className="justify-items-center">
  
          <h2 className="mt-8 text-3xl text-green-500">PKR 50,00,000</h2>
          <Link href="/thank-you">
          <button className="bg-blue-600 text-white w-40 h-10 rounded mt-12">Make Payment</button>
          </Link>
        </div>
      </div>
    )
}
