import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {
    galleryEl, loadMoreBtnEl, clearGallery, renderImages, showLoader, removeLoader,
    showElement, hideElement, scrollPage, showErrorNotification, showInfoNotification
} from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

let inputValue = '';
let page = 1;

const formEl = document.querySelector(".form");

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
});

gallery.on('show.simplelightbox');

formEl.addEventListener("submit", async event => handleFormSubmit(event));
loadMoreBtnEl.addEventListener("click", async () => handleClick())

async function handleFormSubmit(event) {
    event.preventDefault();

    clearGallery();
    hideElement(loadMoreBtnEl);
    showLoader();

    const inputEl = document.querySelector(".search-input");
    inputValue = inputEl.value.trim();
    inputEl.value = '';

    if (!inputValue) {
        showErrorNotification("Input can not be empty!");
        removeLoader()
        return;
    }

    await fetchAndRenderImages(inputValue);
}

async function handleClick() {
    hideElement(loadMoreBtnEl);
    showLoader();
    page += 1;
    await fetchAndRenderImages(inputValue, page);
}

async function fetchAndRenderImages(value, pageValue) {
    return await fetchImages(value, pageValue)
        .then(images => {
            const imagesList = images.data.hits;
            if (imagesList.length < 1) {
                showErrorNotification("Sorry, there are no images matching your search query. Please try again!");
                return;
            }

            renderImages(imagesList);

            if (galleryEl.children.length < images.data.totalHits) {
                showElement(loadMoreBtnEl);
            } else {
                showInfoNotification("We're sorry, but you've reached the end of search results.");
                hideElement(loadMoreBtnEl);
            }

            gallery.refresh();
            scrollPage();
        })
        .catch(error => showErrorNotification(`Error fetching images: ${error.message}`))
        .finally(() => removeLoader())
}