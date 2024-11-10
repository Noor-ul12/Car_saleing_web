import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header>
            <div className=" items-center justify-center w-full h-40 bg-black text-white Class
Properties
divide-x-0 > * + *	border-right-width: 0px;
border-left-width: 0px;
divide-x-2">
                <div className="flex w-full h-10 justify-between items-center pb-2 border">
                    <section className=" mx-20">Downdoad App via SMS</section>
                    <section className="flex mx-20 place-content-between leading-tight space-x-3.5 line-clamp-1 ">
                        <h1>Sign Up</h1>
                        <h1>Sign In</h1>
                    </section>

                </div>


                <div className="flex justify-between mt-4 mx-20 py-2 w-14/5 h-20">
                    <Image src={`/logo.png`} alt={"palwheel logo"} width={300} height={30} />

                    <nav className=" flex ml-32 ">
                        <ul className="flex space-x-7 mt-10">
                            <li>UsedCars</li>
                            <li>NewCars</li>
                            <li>Bikes</li>
                            <li>AutoStore</li>
                            <li>Videos</li>
                            <li>Fourms</li>
                            <li>Blogs</li>
                            <li>More</li>

                        </ul>

                        <button className="mt-8 ml-6 bg-rose-700 w-32 h-9 rounded-md">Post an Ad</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}