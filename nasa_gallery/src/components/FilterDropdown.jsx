import React from "react";

const FilterDropdown = ({ images, setFilteredImages }) => {
  const handleFilterChange = (e) => {
    const filter = e.target.value;
    if (filter === "all") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.media_type === filter));
    }
  };

  return (
    <select onChange={handleFilterChange} className="filter-dropdown">
      <option value="all">All</option>
      <option value="image">Images</option>
      <option value="video">Videos</option>
    </select>
  );
};

export default FilterDropdown;
