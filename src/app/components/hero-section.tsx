import React from "react";

export default function SellYourCars() {
    return (
        <div className="bg-white p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Sell Your Car on PakWheels and Get the Best Price</h2>

            <div className="flex px-10">
                <div className="bg-white p-6 rounded-lg shadow-md ">
                    <h3 className="text-xl font-bold mb-4">Post your Ad on PakWheels</h3>
                    <ul className="list-disc list-inside">
                        <li>Post your Ad for Free in 3 Easy Steps</li>
                        <li>Get Genuine Offers from Verified Buyers</li>
                        <li>Sell your car Fast at the Best Price</li>
                    </ul>

                    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Post Your Ad
                    </button>
                </div>

                <div className="bg-white p-6 ml-80 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Try PakWheels Sell It For Me</h3>
                    <ul className="list-disc list-inside">
                        <li>Dedicated Sales Expert to Sell your Car</li>
                        <li>We Bargain for you and share the Best Offer</li>
                        <li>We ensure Safe & Secure Transaction</li>
                    </ul>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Register Your Car
                    </button>
                </div>
            </div>
        </div>

    )
}