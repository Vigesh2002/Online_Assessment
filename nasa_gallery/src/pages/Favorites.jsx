import React, { useState, useEffect } from "react";
import { GoHeartFill } from "react-icons/go";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Load favorites from local storage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = (url) => {
        const updatedFavorites = favorites.filter(fav => fav.url !== url);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="favorites">
            <h2>My Favorites</h2>
            <div className="image-grid">
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    favorites.map((item) => (
                        <div key={item.url} className="image-card">
                            {/* Check if the media type is a video or an image */}
                            {item.media_type === "video" ? (
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="video-frame"
                                ></iframe>
                            ) : (
                                <img src={item.url} alt={item.title} />
                            )}

                            <button className="heart-icon" onClick={() => removeFavorite(item.url)}>
                                <GoHeartFill color="#ff4c4c" size={25} />
                            </button>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Favorites;
