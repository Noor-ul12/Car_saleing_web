import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (

        <div className=" flex justify-center ">
            <h1 className="mb-12  text-center text-3xl mt-12">Made By NOOR UL HUDA.....</h1>
                <Link className="mt-8 px-2" href="https://github.com/Noor-ul12?tab=repositories">
                    <Image src={`/github.png`}
                    alt={`github`}
                        width={100}
                        height={100} />
                    </Link>
            
        </div>


    )
}
