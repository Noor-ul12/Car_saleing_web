
import Image from "next/image"
import Link from "next/link"



export default function FeaturedCar() {
    return (
        <div className="bg-gray-10">
            <div className="flex justify-between p-10">
                <h1 className="text-3xl font-bold ml-20">Featured New Cars</h1>
                <p className="text-blue-600">View All New Cars</p>

            </div>

            <div className="flex ml-10 space-x-10 ml-28 ">
                <h1 className="text-2xl">Popular</h1>
                <h1 className="text-2xl">Upcoming</h1>
                <h1 className="text-2xl">Newly Launched</h1>

            </div>
            <div className="flex mt-10 px-20  space-x-8 mb-8">
                <div className="">
                   <Link href="car_details-corolla">
                    <Image className="ml-7" src={`/Corolla.jpg`} alt={"corolla car"} width={250} height={30} />
                    </Link>
                    <h2 className="font-bold text-blue-600 text-center"><Link href="/car_details-corolla">ToyotaCorolla</Link></h2>
                    <h2 className="text-green-500 text-center"><Link href="car_details-corolla">PRK 59.5 - 75.9 lacs</Link></h2>
                </div>

                <div className="">
                    <Link href="car_details-alto">
                    <Image className="" src={`/alto.png`} alt={"Alto car"} width={250} height={30} />
                    </Link>
                    <h2 className="font-bold text-blue-600 text-center">Suzuki Alto</h2>
                    <h2 className="text-green-500 text-center">PRK 23.3 - 30.5 lacs</h2>
                </div>
                <div>
                    <Image className="" src={`/Honda.jpg`} alt={"city car"} width={250} height={30} />
                    <h2 className="font-bold text-blue-600 text-center">Honda City</h2>
                    <h2 className="text-green-500 text-center">PRK 46.5 - 58.9 lacs</h2>
                </div>
                <div>


                    <Image className="" src={`/Cover.jpg`} alt={"civic car"} width={250} height={30} />
                    <h2 className="font-bold text-blue-600 text-center">Honda Civic</h2>
                    <h2 className="text-green-500 text-center">PRK 86.6 - 99.0 lacs</h2>


                </div>

            </div>

        </div>
    )
}