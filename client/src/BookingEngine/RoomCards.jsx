import React from 'react';

const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        description: 'A spacious room with a king-size bed, ensuite bathroom, and city view.',
        price: 120,
        image: 'https://via.placeholder.com/300x200?text=Deluxe+Room',
    },
    {
        id: 2,
        name: 'Standard Room',
        description: 'Comfortable room with a queen-size bed and modern amenities.',
        price: 90,
        image: 'https://via.placeholder.com/300x200?text=Standard+Room',
    },
    {
        id: 3,
        name: 'Suite',
        description: 'Luxury suite with separate living area, premium facilities, and balcony.',
        price: 200,
        image: 'https://via.placeholder.com/300x200?text=Suite',
    },
];

function RoomCards() {
    return (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {rooms.map(room => (
                <div key={room.id} style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    width: '300px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    background: '#fff'
                }}>
                    <img src={room.image} alt={room.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '16px' }}>
                        <h3 style={{ margin: '0 0 8px' }}>{room.name}</h3>
                        <p style={{ margin: '0 0 12px', color: '#555' }}>{room.description}</p>
                        <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>${room.price} / night</div>
                        <button style={{
                            background: '#1976d2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '8px 16px',
                            cursor: 'pointer'
                        }}>
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RoomCards;
