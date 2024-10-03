import axios from 'axios';

const PERSONAL_KEY = "46326660-f347cca7b0a8e4257f7060487";

axios.defaults.baseURL = "https://pixabay.com/api/";

const searchParams = (imageQueryString) => new URLSearchParams({
    key: PERSONAL_KEY,
    q: imageQueryString,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
});

export const fetchImages = imageQueryString => 
    axios.get(`?${searchParams(imageQueryString)}`);