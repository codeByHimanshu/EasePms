import React, { useState } from 'react';

const RoomView = () => {
    const [rooms, setRooms] = useState(Array.from({ length: 55 }, (_, i) => ({
        id: i + 1,
        name: `Room ${i + 1}`,
        type: '', // 
        price: '',
        assignedTo: null, // null means not assigned
    })));

    const roomTypes = ['Single', 'Double', 'Suite', 'Deluxe', 'Family', 'Executive'];

    const handleAssign = (roomId) => {
        const updatedRooms = rooms.map(room =>
            room.id === roomId ? { ...room, assignedTo: room.assignedTo ? null : 'Assigned' } : room
        );
        setRooms(updatedRooms);
    };

    return (
        <div className="p-4">
            {rooms.map(room => (
                <div key={room.id} className="m-4 p-4 border border-gray-300 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                    <p className="mb-2">
                        Type: 
                        <select 
                            className="ml-2 p-1 border border-gray-300 rounded"
                            value={room.type} 
                            onChange={(e) => {
                                const updatedRooms = rooms.map(r =>
                                    r.id === room.id ? { ...r, type: e.target.value } : r
                                );
                                setRooms(updatedRooms);
                            }}
                        >
                            <option value="">Select Type</option>
                            {roomTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </p>
                    <p className="mb-2">
                        Price: 
                        <input
                            className="ml-2 p-1 border border-gray-300 rounded"
                            type="number"
                            value={room.price}
                            onChange={(e) => {
                                const updatedRooms = rooms.map(r =>
                                    r.id === room.id ? { ...r, price: e.target.value } : r
                                );
                                setRooms(updatedRooms);
                            }}
                        />
                    </p>
                    <p className="mb-2">Status: {room.assignedTo || 'Not Assigned'}</p>
                    <button 
                        className={`px-4 py-2 rounded ${room.assignedTo ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                        onClick={() => handleAssign(room.id)}
                    >
                        {room.assignedTo ? 'Unassign' : 'Assign'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RoomView;