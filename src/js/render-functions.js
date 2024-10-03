import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import errorIconUrl from "../img/error.svg";

const galleryEl = document.querySelector(".gallery");

export const clearGallery = () => {
    galleryEl.innerHTML = '';
}

export const renderImages = images => {
  const markup = images.hits
    .map((image) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    data-source="${image.largeImageURL}"
                    alt="${image.tags}"
                />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Likes</span>
                    ${image.likes}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Views</span>
                    ${image.views}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Comments</span>
                    ${image.comments}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Downloads</span>
                    ${image.downloads}
                </p>
            </div>
        </li>`;
    })
        .join("");
    
    galleryEl.insertAdjacentHTML("beforeend", markup);
}

export const showLoader = () => {
    galleryEl.insertAdjacentHTML("beforeBegin", `<span class="loader"></span>`);
}

export const removeLoader = () => {
    const loaderEl = document.querySelector('.loader');
    loaderEl.remove();
}

export const showErrorNotification = errorMessage => iziToast.error({
    title: '',
    message: errorMessage,
    class: 'custom-noty error',
    position: 'topRight',
    iconUrl: errorIconUrl,
});