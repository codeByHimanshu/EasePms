import React, { useState, useEffect } from 'react';
export default function Reservations() {
    


    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from an API or database
        fetch('/api/reservations')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    return (
        <div>
            <h1>Reservations bjilfjifhilfhlfhlfhlfhlfhlfhlfhlfhlfhlfhlhuilguilguifguierghghui</h1>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.name} - {reservation.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};
