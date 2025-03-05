import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const Detail = () => {
    const { imageUrl } = useParams();
    const location = useLocation();
    const [image, setImage] = useState(location.state?.image || null);

    useEffect(() => {
        if (!image) {
            // If image is missing in state, load from localStorage
            const storedImage = JSON.parse(localStorage.getItem("lastClickedImage"));
            if (storedImage && storedImage.url === decodeURIComponent(imageUrl)) {
                setImage(storedImage);
            }
        }
    }, [image, imageUrl]);

    return (
        <div className="detail-container">
            {image ? (
                <>
                    {/* 🔥 Check if the media is an image or video */}
                    {image.media_type === "image" ? (
                        <img
                            src={decodeURIComponent(imageUrl)}
                            alt={image.title || "NASA Image"}
                            className="detail-image"
                        />
                    ) : image.media_type === "video" ? (
                        <iframe
                            src={decodeURIComponent(imageUrl)}
                            title={image.title || "NASA Video"}
                            allowFullScreen
                            className="detail-video"
                            width="100%"
                            height="400px"
                        ></iframe>
                    ) : null}

                    <h2>{image.title || "No Title"}</h2>
                    <p>{image.explanation || "No Description Available"}</p> {/* Fixed description */}

                    {/* Display Date */}
                    <p><strong>Date:</strong> {image.date || "No Date Available"}</p>

                    {/* Display Copyright */}
                    <p><strong>Copyright:</strong> {image.copyright || "No copyright info available"}</p>
                </>
            ) : (
                <p>Loading image details...</p>
            )}
            <Link to="/" className="back-button">🔙 Back</Link>
        </div>
    );
};

export default Detail;
