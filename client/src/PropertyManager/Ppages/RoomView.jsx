
import React, { useState } from 'react';

const RoomViewForm = () => {
    const [roomName, setRoomName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [roomPrice, setRoomPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ roomName, roomType, roomPrice });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Room Name:</label>
                <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
            </div>
            <div>
                <label>Room Type:</label>
                <input
                    type="text"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                />
            </div>
            <div>
                <label>Room Price:</label>
                <input
                    type="number"
                    value={roomPrice}
                    onChange={(e) => setRoomPrice(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
