import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RateUpdate = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all room types (on mount)
useEffect(() => {
  const fetchRoomTypes = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch('http://localhost:3000/api/roomtype/getallroomtypes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch room types');
      }

      const data = await response.json();

      
      setRoomTypes(data.roomTypes || data.data || []); 
    } catch (error) {
      console.error('Error loading room types:', error);
      toast.error("Could not load room types");
    }
  };

  fetchRoomTypes();
}, []);


  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRoomType || !basePrice) {
      toast.warning('Please fill all fields');
      return;
    }
    if (isNaN(basePrice) || Number(basePrice) < 0) {
      toast.error('Base price must be a positive number');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/rooms/updaterate/${selectedRoomType}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ baseprice: Number(basePrice) })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update');
      }

      toast.success(data.message || 'Rate updated successfully');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Update Room Type Rate</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-1">Select Room Type</label>
            <select
              className="w-full px-4 py-2 border rounded-lg bg-gray-50"
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
              required
            >
              <option value="">-- Choose Room Type --</option>
              {roomTypes.map((rt) => (
                <option key={rt._id} value={rt._id}>{rt.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">New Base Price (₹)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              min="0"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold transition duration-200 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Rate'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RateUpdate;
