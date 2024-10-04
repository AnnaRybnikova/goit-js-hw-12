import axios from 'axios';

const PERSONAL_KEY = "46326660-f347cca7b0a8e4257f7060487";

axios.defaults.baseURL = "https://pixabay.com/api/";

const searchParams = (imageQueryString, pageQuery) => new URLSearchParams({
    key: PERSONAL_KEY,
    q: imageQueryString,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: pageQuery,
    per_page: 15,
});

export const fetchImages = async (imageQueryString, page = 1) => 
    await axios.get(`?${searchParams(imageQueryString, page)}`);