import { useState, useEffect } from "react";

import { FaHotel } from "react-icons/fa";
import PaymentModal from '../component/PaymentModal.jsx'
import PaymentCollectModal from "../component/PaymentCollectModel.jsx";

export default function AddPages() {
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv1, setShowDiv1] = useState(false);
    const [guestType, setGuestType] = useState("returning");
    const [guestName, setGuestName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isCollectOpen,setIsCollectOpen]=useState(false);
    const handleShowDiv1 = () => {
        setShowDiv1(true);
    }
    const [rooms, setRooms] = useState(
        Array(5).fill({ adults: 1, children: 0, rate: 2240 })
    );
    const handleShowDiv = () => {
        setShowDiv(true);
    }
    const extrasList = [
        "Room Posting",
        "Banquet",
        "Channel",
        "Early Check In",
        "Extra Mattress",
    ];

    return (
        <>
            
            <div className="flex flex-col mt-2">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-md shadow-md flex flex-col">
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
                                    onClick={handleShowDiv}
                                    className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                    <option value="bookOnGoogle">Book on Google</option>
                                    <option value="bookingCom">Booking.com</option>
                                    <option value="expedia">Expedia</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label htmlFor="checkIn" className="block text-gray-700 font-medium mb-1">Check In</label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    name="checkIn"
                                    defaultValue="2025-02-04"
                                    className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="nights" className="block text-gray-700 font-medium mb-1">Nights</label>
                                <input
                                    type="number"
                                    id="nights"
                                    name="nights"
                                    defaultValue="1"
                                    className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="checkOut" className="block text-gray-700 font-medium mb-1">Check Out</label>
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
                            <label htmlFor="payAtHotel" className="ml-2 text-gray-700">Pay at Hotel</label>
                        </div>
                    </div>
                    {showDiv1 ? <div className="bg-white p-6 rounded-md shadow-md flex flex-col">
                        <h2 className="text-xl font-semibold mb-4 text-gray-600">Booking Summary</h2>
                        <div className="grid grid-cols-3 items-center text-center gap-4 p-2">
                            <div className="text-gray-700">06/02/2025</div>
                            <div className="flex items-center justify-center p-3 rounded-full bg-gray-500 text-white w-12 h-12 mx-auto">
                                <FaHotel className="text-lg" />
                            </div>
                            <div className="text-gray-700">06/02/2025</div>
                        </div>
                        <div className="bg-gray-100 p-4 mt-4 rounded-md flex-1 flex flex-col justify-between">
                            <div className="flex justify-between w-full mb-2">
                                <span className="text-gray-700">Room Charges</span>
                                <span className="font-medium">Rs 3,000.00</span>
                            </div>
                            <div className="flex justify-between w-full mb-2">
                                <span className="text-gray-700">Taxes</span>
                                <span className="font-medium">Rs 360.00</span>
                            </div>
                            <div className="flex justify-between w-full border-t pt-2 font-semibold">
                                <span className="text-gray-800">Total Price</span>
                                <span>Rs 3,360.00</span>
                            </div>
                        </div>
                    </div> : ""}
                </div>
                {showDiv ? <div className=" justify-start max-w-xl mx-auto bg-white p-6 rounded-md shadow mt-4">
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
                                onClick={handleShowDiv1}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                    </div>
                </div> : ""}

                <div className="flex justify-between space-x-1">
                    {showDiv1 ?
                        <div className="grid grid-rows-1">
                            <div className="border rounded-lg p-4 w-full h-fit shadow-md mt-4 relative">
                                <div className="grid grid-cols-4 gap-4 p-2 font-semibold border-b bg-gray-100">
                                    <span>Adult</span>
                                    <span>Child</span>
                                    <span>Rate (Tax Inc.)</span>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="overrideRate" className="w-4 h-4" />
                                        <label htmlFor="overrideRate">Override Rate</label>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h2 className="font-bold text-lg">Standard EP</h2>
                                    {rooms.map((room, index) => (
                                        <div key={index} className="grid grid-cols-4 gap-4 p-2 border-b items-center">
                                            <span>Room {index + 1}</span>
                                            <select className="border p-2 rounded w-full">
                                                {[1, 2, 3, 4].map((num) => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <select className="border p-2 rounded w-full">
                                                {[0, 1, 2, 3].map((num) => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <span>Rs {room.rate.toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 w-full  mt-3 border">
                                    <h2 className=" ml-0 mb-3 font-semibold">GUEST INFORMATION</h2>
                                    <div className="grid grid-cols-1">
                                        <div>
                                            <label htmlFor="">
                                                <input type="radio" className="w-8 h-4" />
                                            </label>
                                            <span>Returning Guest</span>
                                        </div>
                                        <div>
                                            <label htmlFor="">
                                                <input type="radio" className="w-8 h-4" />
                                            </label>
                                            <span>New Guest</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="rounded">
                                            <input type="text" className="w-full h-9 rounded border border-black p-2" />
                                        </div>
                                        <div><button className="bg-blue-600 h-9 p-2 font-semibold text-white rounded">Search</button></div>
                                    </div>
                                    <div className="text-gray-600 mt-2 w-auto h-auto  p-8 border  bg-gray-200">
                                        <label htmlFor="" className="text-2xl font-semibold">Info</label>
                                        <div className="rounded ">
                                            <input className="w-full h-9 p-2 rounded border border-black" type="text" placeholder="Guest Name" />
                                        </div>
                                        <div className="flex space-x-2 mt-2 w-auto h-8">
                                            <div >
                                                <label htmlFor="" className="text-gray-500">Email</label>
                                                <input className="w-auto h-8 rounded border border-black" type="text" /></div>
                                            <div>
                                                <label htmlFor="" className="text-gray-500">Mobile</label>
                                                <input className="w-auto h-8 rounded border border-black" type="text" /></div>
                                        </div>
                                    </div>
                                    {/* {credit card information div} */}
                                    <div className="p-6 border rounded-md text-white mt-3">
                                        <div className="mb-3">
                                            <input
                                                className="w-full rounded p-2 border px-4 text-black"
                                                placeholder="Credit Card Number"
                                                type="text"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="w-full rounded p-2 border px-4 text-black"
                                                placeholder="Card Holder Name"
                                                type="text"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {/* <input
                                                className="w-full rounded p-2 border px-4 text-black"
                                                placeholder="MM/YY"
                                                type="text"
                                            /> */}
                                            <select className="w-full rounded p-2 border px-4 text-black">
                                                <option value="">Select Year</option>
                                                {Array.from({ length: 2050 - 2015 + 1 }, (_, i) => 2015 + i).map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>

                                            <input
                                                className="w-full rounded p-2 border px-4 text-black"
                                                placeholder="CVV"
                                                type="text"
                                            />
                                            <select className="w-full rounded p-2 border px-4 text-black">
                                                <label htmlFor="" className="bg-black">Select Month</label>
                                                <option value="">Select Month</option>
                                                {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                    {/* payment add or collect infomation's div */}
                                    <div className="flex items-center space-x-3 mt-3">
                                        <span className="font-bold text-lg w-1/3">PAYMENTS</span>
                                        <button
                                            className="bg-blue-600 w-1/3 text-white px-2 py-2 rounded hover:bg-blue-700"
                                            onClick={() => setIsOpen(true)} 
                                        >
                                            ADD
                                        </button>

                                        <button className="bg-blue-600 w-1/3 text-white px-2 py-2 rounded hover:bg-blue-700"onClick={()=>setIsCollectOpen(true)}>COLLECT</button>
                                        {isOpen && <PaymentModal onClose={() => setIsOpen(false)} />}
                                        {isCollectOpen && <PaymentCollectModal onClose={()=>setIsCollectOpen(false)}/>}
                                    </div>

                                </div>
                            </div>

                        </div> : ""}

                    {showDiv1 ? <div className="border rounded-lg p-4 w-full bg-white shadow-md mt-4">
                        <div className="flex justify-between items-center border-b pb-2 mb-2">
                            <h2 className="font-bold text-lg">ADD EXTRAS</h2>
                            <button className="flex items-center gap-2 text-blue-500 border px-2 py-1 rounded">
                                ↻ Reset
                            </button>
                        </div>
                        {rooms.map((room, index) => (
                            <div key={index} className="border-b pb-4 mb-4">
                                <h3 className="font-bold text-md">Room {index + 1} - Standard EP</h3>
                                <div className="grid grid-cols-3 gap-4 p-2 font-semibold">
                                    <span>Adult: {room.adults}</span>
                                    <span>Child: {room.children}</span>
                                    <span>Rate: Rs {room.rate.toFixed(2)}</span>
                                </div>
                                <div className="mt-2">
                                    <h4 className="font-semibold">Extra Charge</h4>
                                    {extrasList.map((extra) => (
                                        <div key={extra} className="flex items-center gap-2 mt-1">
                                            <input type="checkbox" className="w-4 h-4" />
                                            <span>{extra}</span>
                                            <input
                                                type="number"
                                                className="border p-1 rounded w-20 text-right"
                                                placeholder="Rs 0.00"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div> : ""}
                </div>
            </div>


        </>

    );
}