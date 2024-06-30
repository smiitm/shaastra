import React, { useState, useEffect, useRef } from 'react';
const searchData = require('./searchData.json');

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // filtering sugessions
        if (value.length > 0) {
            const filteredSuggestions = searchData.suggestions.filter(
                (suggestion) => suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="relative w-full px-4 pt-10" ref={searchRef}>
            <input className="w-full px-4 py-2 border-b-4  border-blue-950  text-blue-950 text-xl font-bold focus:outline-none"  
                type="text" value={searchTerm} onChange={handleChange} 
                placeholder="WHAT ARE YOU LOOKING FOR ?"
            />
            
            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                        <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            key={index} onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;