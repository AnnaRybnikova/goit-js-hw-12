import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages, showErrorNotification, showLoader, removeLoader, clearGallery } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

const formEl = document.querySelector(".form");
let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
});

gallery.on('show.simplelightbox');

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    clearGallery();
    showLoader();

    const inputEl = document.querySelector(".search-input");
    const inputValue = inputEl.value.trim();
    inputEl.value = '';

    if (!inputValue) {
        showErrorNotification("Input can not be empty!");
        return;
    }

    fetchImages(inputValue)
        .then(images => {
            if (images.hits < 1) {
                showErrorNotification("Sorry, there are no images matching your search query. Please try again!");
                return;
            }

            renderImages(images);
            gallery.refresh();
        })
        .catch(error => showErrorNotification(`Error fetching images: ${error.message}`))
        .finally(() => removeLoader())
});