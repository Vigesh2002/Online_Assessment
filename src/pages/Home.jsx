import { useEffect, useState } from "react";
import { fetchImages } from "../services/api";
import ImageCard from "../components/ImageCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";

const Home = ({ setLoading }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
      setFilteredImages(data);
    });
  }, []);

  return (
    <div className="home">
      <div className="sf">
        <SearchBar images={images} setFilteredImages={setFilteredImages} />
        <FilterDropdown images={images} setFilteredImages={setFilteredImages} />
      </div>
      <div className="image-grid">
        {filteredImages.map((img) => (
          <ImageCard key={img.date} image={img} setLoading={setLoading} />
        ))}
      </div>
    </div>
  );
};

export default Home;
