import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";

const ImageCard = ({ image, setLoading }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.url === image.url));
  }, [image.url]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.url !== image.url);
    } else {
      favorites.push(image);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="image-card">
      {/* 🔥 Handle both images and videos */}
      {image.media_type === "image" ? (
        <img src={image.url} alt={image.title} loading="lazy" />
      ) : image.media_type === "video" ? (
        <iframe
          src={image.url}
          title={image.title}
          allowFullScreen
          width="280"
          height="200"
        ></iframe>
      ) : null}

      <button
        className="heart-icon"
        onClick={toggleFavorite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isFavorite || isHovered ? (
          <GoHeartFill color="#ff4c4c" size={25} />
        ) : (
          <GoHeart color="gray" size={25} />
        )}
      </button>

      <h3>{image.title}</h3>
      <h3>{image.date}</h3>

      <Link
        to={`/detail/${encodeURIComponent(image.url)}`}
        state={{ image }}
        className="view-details1"
        onClick={() => setLoading(true)}
      >
        <button className="view-details">View Details</button>
      </Link>
    </div>
  );
};

export default ImageCard;
