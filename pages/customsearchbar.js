import React, { useState } from 'react';

const customsearchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm, 'in', selectedCity);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Paris">Paris</option>
                    {/* Add more cities as needed */}
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default customsearchbar;
