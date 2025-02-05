import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
export default function AddPages() {
    const [showDiv, setShowDiv] = useState(false);
    const handleShowDiv = () => {
        setShowDiv(true);
    }
    // setShowDiv(false)
    return (
        <>
            <Navbar />
            <div className="static" >
                <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow absolute top-20 left-2">
                    <h2 className="text-xl font-semibold mb-4">Booking Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="bookingSource" className="block text-gray-700 font-medium mb-1">
                                Booking Source
                            </label>
                            <select
                                id="bookingSource"
                                name="bookingSource"
                                className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                <option value="OTA">OTA</option>
                                <option value="Website">Website</option>
                                <option value="Direct">Direct</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="ota" className="block text-gray-700 font-medium mb-1">
                                OTA
                            </label>
                            <select
                                id="ota"
                                name="ota"
                                className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                onChange={handleShowDiv}
                                style={{ width: '100%' }}
                            >
                                <option value="bookOnGoogle">Book on Google</option>
                                <option value="bookingCom">Booking.com</option>
                                <option value="expedia">Expedia</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="checkIn" className="block text-gray-700 font-medium mb-1">
                                Check In
                            </label>
                            <input
                                type="date"
                                id="checkIn"
                                name="checkIn"
                                defaultValue="2025-02-04"
                                className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="nights" className="block text-gray-700 font-medium mb-1">
                                Nights
                            </label>
                            <input
                                type="number"
                                id="nights"
                                name="nights"
                                defaultValue="1"
                                className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="checkOut" className="block text-gray-700 font-medium mb-1">
                                Check Out
                            </label>
                            <input
                                type="date"
                                id="checkOut"
                                name="checkOut"
                                defaultValue="2025-02-05"
                                className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="payAtHotel"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="payAtHotel" className="ml-2 text-gray-700">
                            Pay at Hotel
                        </label>
                    </div>
                </div>
                {showDiv ? <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow mt-4 top-96 left-2">
                    <div className=" p-2 pl-4 border"><h2 className="text-xl font-semi-bold mb-4">Room Details</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4" >
                        <div>
                            <label className="text-gray-600 font-md mt-2" >
                                Room Type
                            </label>
                            <select
                                id="bookingSource"
                                name="bookingSource"
                                className="mt-2 block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                style={{ width: '100%' }}
                            >
                                <option value="Deluxe">Deluxe</option>
                                <option value="Standard">Standard</option>
                                <option value="Suite">Suite</option>
                                <option value="Twin">Twin</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 font-md " > Room Plan</label>
                            <select
                                id="bookingSource"
                                name="bookingSource"
                                className="mt-2 p-1 block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                style={{ width: '100%' }}
                            >
                                <option value="Deluxe Cp">Deluxe Cp</option>
                                <option value="Deluxe Ep">Deluxe Ep</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 font-md " > Room</label>
                            <select
                                id="Room"
                                name="Room"
                                defaultValue="Select Room"
                                className="mt-2 block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                style={{ width: '100%' }}
                            >
                                <option value="101">101</option>
                                <option value="102">102</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 font-md " > Rooms</label>
                            <select
                                id="rooms"
                                name="rooms"
                                defaultValue="Select Room"
                                className="mt-2 block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                style={{ width: '100%' }}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                    </div>
                </div> : ""}

            </div>


        </>

    );
}