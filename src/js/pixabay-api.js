const PERSONAL_KEY = "46326660-f347cca7b0a8e4257f7060487";
const BASE_URL = "https://pixabay.com/api/";

const searchParams = (imageQueryString) => new URLSearchParams({
    key: PERSONAL_KEY,
    q: imageQueryString,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
});

export const fetchImages = imageQueryString => {
    return fetch(`${BASE_URL}?${searchParams(imageQueryString)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}