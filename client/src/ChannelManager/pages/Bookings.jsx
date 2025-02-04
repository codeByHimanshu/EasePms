import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../component/Navbar";

const dummyBookings = [
    {
        resNo: "RES001",
        bookingDate: "2023-10-01",
        guestName: "John Doe",
        dates: "Oct 15-17",
        room: "Deluxe",
        pax: 2,
        total: "$500",
        adr: "$250",
        deposit: "Pending",
        source: "Booking.com"
    },
    {
        resNo: "RES002",
        bookingDate: "2023-10-02",
        guestName: "Jane Smith",
        dates: "Oct 20-22",
        room: "Suite",
        pax: 3,
        total: "$750",
        adr: "$375",
        deposit: "Paid",
        source: "Direct"
    }
];

const Bookings = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        room: "",
        source: "",
        showPending: false
    });
    const [showFilters, setShowFilters] = useState(false);

    const uniqueRooms = [...new Set(dummyBookings.map(booking => booking.room))];
    const uniqueSources = [...new Set(dummyBookings.map(booking => booking.source))];

    const filteredBookings = dummyBookings.filter(booking => {
        const matchesSearch = booking.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.resNo.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRoom = filters.room === "" || booking.room === filters.room;
        const matchesSource = filters.source === "" || booking.source === filters.source;
        const matchesPending = !filters.showPending || booking.deposit === "Pending";

        return matchesSearch && matchesRoom && matchesSource && matchesPending;
    });

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50 w-full">
                <div className="p-6 max-w-[1920px] mx-auto">
                    {/* Header Section with enhanced styling */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                        <div className="relative flex-grow max-w-md">
                            <input
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm 
                                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                                     transition-all duration-300"
                                placeholder="Search GuestName or ResNo"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex gap-3">
                            <button
                                className="flex items-center px-4 py-2 border border-gray-200 rounded-lg
                                     hover:bg-gray-100 transition-all duration-300 shadow-sm"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <FiSliders className="w-4 h-4 mr-2" /> FILTER
                            </button>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg
                                         hover:bg-blue-700 transition-all duration-300 shadow-md">
                                <AiOutlinePlus className="w-4 h-4 mr-2" /> ADD RESERVATION
                            </button>
                        </div>
                    </div>

                    {/* Filters Section with animation */}
                    <div className={`transform transition-all duration-300 ease-in-out overflow-hidden
                                ${showFilters ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                        <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex flex-wrap gap-4">
                                <select
                                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 
                                         focus:outline-none transition-all duration-300"
                                    value={filters.room}
                                    onChange={(e) => setFilters({ ...filters, room: e.target.value })}
                                >
                                    <option value="">All Rooms</option>
                                    {uniqueRooms.map(room => (
                                        <option key={room} value={room}>{room}</option>
                                    ))}
                                </select>
                                <select
                                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 
                                         focus:outline-none transition-all duration-300"
                                    value={filters.source}
                                    onChange={(e) => setFilters({ ...filters, source: e.target.value })}
                                >
                                    <option value="">All Sources</option>
                                    {uniqueSources.map(source => (
                                        <option key={source} value={source}>{source}</option>
                                    ))}
                                </select>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.showPending}
                                        onChange={(e) => setFilters({ ...filters, showPending: e.target.checked })}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-400 mr-2"
                                    />
                                    Show Pending Deposits Only
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Table Section with enhanced styling */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Res No</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Date</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Guest Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Dates</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Room</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Pax</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Total</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ADR</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Deposit</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Source</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredBookings.map((booking, index) => (
                                        <tr key={index}
                                            className="hover:bg-blue-50 transition-colors duration-200">
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.resNo}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.bookingDate}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.guestName}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.dates}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.room}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.pax}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.total}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.adr}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.deposit}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">{booking.source}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Bookings;
