import React, { useEffect, useState } from 'react';

function CreateProperty() {
  const [formData, setFormData] = useState({
    hotelid: '',
    title: '',
    description: '',
    rating: '',
    location: {
      address: '',
      city: '',
      state: '',
      country: '',
      zip: ''
    },
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    area: '',
    features: {
      pool: '',
      garden: '',
      gym: ''
    },
    images: [],
    owner: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const handleChange = (e, nestedKey, parentKey) => {
    const value = e.target.value;
    if (parentKey) {
      setFormData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [nestedKey]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };

  const handleFeatureChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: {
        ...prev.features,
        [name]: value
      }
    }));
  };

  const handleOwnerChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      owner: {
        ...prev.owner,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/createproperty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed create property');
      }
  
      const result = await response.json();
      console.log('Property created:', result);
        

    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-10 text-gray-800 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
   
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating (e.g. 4.5)"
            value={formData.rating}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Address" value={formData.location.address} onChange={(e) => handleChange(e, 'address', 'location')} className="p-3 border rounded-lg" required />
          <input type="text" placeholder="City" value={formData.location.city} onChange={(e) => handleChange(e, 'city', 'location')} className="p-3 border rounded-lg" required />
          <input type="text" placeholder="State" value={formData.location.state} onChange={(e) => handleChange(e, 'state', 'location')} className="p-3 border rounded-lg" />
          <input type="text" placeholder="Country" value={formData.location.country} onChange={(e) => handleChange(e, 'country', 'location')} className="p-3 border rounded-lg" />
          <input type="text" placeholder="ZIP Code" value={formData.location.zip} onChange={(e) => handleChange(e, 'zip', 'location')} className="p-3 border rounded-lg" />
        </div>

     
        <div className="grid grid-cols-3 gap-4">
          <select name="propertyType" value={formData.propertyType} onChange={handleChange} required className="p-3 border rounded-lg">
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="land">Land</option>
          </select>
          <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} className="p-3 border rounded-lg" required />
          <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} className="p-3 border rounded-lg" required />
          <input type="number" name="area" placeholder="Area (sqft)" value={formData.area} onChange={handleChange} className="p-3 border rounded-lg col-span-2" required />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="pool" placeholder="Pool Info" value={formData.features.pool} onChange={handleFeatureChange} className="p-3 border rounded-lg" />
          <input type="text" name="garden" placeholder="Garden Info" value={formData.features.garden} onChange={handleFeatureChange} className="p-3 border rounded-lg" />
          <input type="text" name="gym" placeholder="Gym Info" value={formData.features.gym} onChange={handleFeatureChange} className="p-3 border rounded-lg" />
        </div>

        <h3 className="text-xl font-semibold text-blue-600">Owner Information</h3>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="name" placeholder="Owner Name" value={formData.owner.name} onChange={handleOwnerChange} required className="p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Owner Email" value={formData.owner.email} onChange={handleOwnerChange} required className="p-3 border rounded-lg" />
          <input type="tel" name="phone" placeholder="Owner Phone" value={formData.owner.phone} onChange={handleOwnerChange} required className="p-3 border rounded-lg" />
        </div>

 
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          Submit Property
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;
