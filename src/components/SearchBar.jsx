import React, { useState } from "react";

const SearchBar = ({ images, setFilteredImages }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        const filtered = images.filter(img =>
            img.title.toLowerCase().includes(value) || img.date.includes(value)
        );

        setFilteredImages(filtered);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by title or date..."
                value={query}
                onChange={handleSearch}
            />
            <span className="search-icon">🔍</span>
        </div>
    );
};

export default SearchBar;
