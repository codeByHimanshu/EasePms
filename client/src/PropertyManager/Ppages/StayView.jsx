import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiToggleRight } from "react-icons/fi";

const StayView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [viewType, setViewType] = useState('all');
    const [roomTypes] = useState(["Banquet Hall", "Deluxe", "Luxury", "Suite", "Twin"]);
    
    const generateDummyRooms = () => {
        const rooms = [];
        // Room distribution
        const roomDistribution = {
            "Banquet Hall": [101, 102],
            "Deluxe": [201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
            "Luxury": [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315],
            "Suite": [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413],
            "Twin": [501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515]
        };
    
        const statuses = ["vacant", "occupied", "reserved", "blocked", "dueout", "dirty"];
        const guestNames = ["Mr. Smith", "Mr. Johnson", "Ms. Davis", "Mrs. Wilson", "Mr. Brown", "Ms. Taylor"];
    
        Object.entries(roomDistribution).forEach(([type, roomNumbers]) => {
            roomNumbers.forEach(roomNum => {
                rooms.push({
                    room: roomNum,
                    type: type,
                    status: statuses[Math.floor(Math.random() * statuses.length)],
                    guest: Math.random() > 0.3 ? guestNames[Math.floor(Math.random() * guestNames.length)] : ""
                });
            });
        });
    
        return rooms;
    };
    
    // Generate rooms data with today's date
    const allRoomsData = {
        [selectedDate]: generateDummyRooms(),
    };

    // Get rooms for selected date or default rooms if no data exists
    const getRoomsForDate = (date) => {
        return allRoomsData[date] || []; // fallback to empty array if no data for date
    };

    const [bookings, setBookings] = useState(getRoomsForDate(selectedDate));
    const [selectedRoomType, setSelectedRoomType] = useState("All");

    // Handle date change
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const newRooms = getRoomsForDate(date);
        setBookings(newRooms);
        setViewType('all');
        setSelectedRoomType("All");
    };

    // Counts for status badges
    const getCounts = () => {
        const currentRooms = getRoomsForDate(selectedDate);
        return {
            all: currentRooms.length,
            vacant: currentRooms.filter(room => room.status === "vacant").length,
            occupied: currentRooms.filter(room => room.status === "occupied").length,
            reserved: currentRooms.filter(room => room.status === "reserved").length,
            blocked: currentRooms.filter(room => room.status === "blocked").length,
            dueout: currentRooms.filter(room => room.status === "dueout").length,
            dirty: currentRooms.filter(room => room.status === "dirty").length,
        };
    };

    // Update view change handler
    const handleViewChange = (status) => {
        setViewType(status);
        const currentRooms = getRoomsForDate(selectedDate);
        const filteredByType = selectedRoomType === "All" 
            ? currentRooms 
            : currentRooms.filter(room => room.type === selectedRoomType);
        
        setBookings(status === 'all' 
            ? filteredByType 
            : filteredByType.filter(room => room.status === status));
    };
    const handleRoomTypeChange = (type) => {
        setSelectedRoomType(type);
        const currentRooms = getRoomsForDate(selectedDate);
        const filtered = type === "All" 
            ? currentRooms
            : currentRooms.filter(room => room.type === type);
        setBookings(filtered);
    };

    const counts = getCounts();

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-700" />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => handleDateChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-1"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <FiToggleRight className="text-gray-700" />
                    <select
                        value={selectedRoomType}
                        onChange={(e) => handleRoomTypeChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-1"
                    >
                        <option value="All">All Types</option>
                        {roomTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-4 mb-6">
                <StatusBadge status="all" count={counts.all} selected={viewType === 'all'} onClick={() => handleViewChange('all')} />
                <StatusBadge status="vacant" count={counts.vacant} selected={viewType === 'vacant'} onClick={() => handleViewChange('vacant')} />
                <StatusBadge status="occupied" count={counts.occupied} selected={viewType === 'occupied'} onClick={() => handleViewChange('occupied')} />
                <StatusBadge status="reserved" count={counts.reserved} selected={viewType === 'reserved'} onClick={() => handleViewChange('reserved')} />
                <StatusBadge status="blocked" count={counts.blocked} selected={viewType === 'blocked'} onClick={() => handleViewChange('blocked')} />
                <StatusBadge status="dueout" count={counts.dueout} selected={viewType === 'dueout'} onClick={() => handleViewChange('dueout')} />
                <StatusBadge status="dirty" count={counts.dirty} selected={viewType === 'dirty'} onClick={() => handleViewChange('dirty')} />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {bookings.map((booking, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold">Room {booking.room}</span>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p>{booking.guest}</p>
                            <p>{booking.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// StatusBadge component remains the same
// ...
const StatusBadge = ({ status, count, selected, onClick }) => {
    const getStatusStyles = () => {
        const baseStyles = "rounded-full px-4 py-2 text-center cursor-pointer transition-colors";
        const styles = {
            all: "bg-gray-100 hover:bg-gray-200",
            vacant: "bg-green-100 hover:bg-green-200",
            occupied: "bg-blue-100 hover:bg-blue-200",
            reserved: "bg-yellow-100 hover:bg-yellow-200",
            blocked: "bg-red-100 hover:bg-red-200",
            dueout: "bg-purple-100 hover:bg-purple-200",
            dirty: "bg-orange-100 hover:bg-orange-200"
        };
        return `${baseStyles} ${styles[status]} ${selected ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`;
    };

    return (
        <div className={getStatusStyles()} onClick={onClick}>
            <div className="font-semibold capitalize">{status}</div>
            <div className="text-lg">{count}</div>
        </div>
    );
};

const getStatusColor = (status) => {
    const colors = {
        vacant: "bg-green-100 text-green-800",
        occupied: "bg-blue-100 text-blue-800",
        reserved: "bg-yellow-100 text-yellow-800",
        blocked: "bg-red-100 text-red-800",
        dueout: "bg-purple-100 text-purple-800",
        dirty: "bg-orange-100 text-orange-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";

};
export default StayView;
// Add this code above the StayView component
