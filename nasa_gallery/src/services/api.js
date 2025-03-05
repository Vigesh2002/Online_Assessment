const API_KEY = import.meta.env.VITE_NASA_API_KEY; // Ensure it's VITE_
console.log("NASA API Key:", API_KEY);

const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchImages = async () => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&count=30`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    } catch (error) {
        console.error("Error fetching images:", error);
        return []; // Return an empty array to prevent .filter() errors
    }
};

export const fetchImageByDate = async (date) => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&date=${date}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    } catch (error) {
        console.error("Error fetching image by date:", error);
        return null;
    }
};
