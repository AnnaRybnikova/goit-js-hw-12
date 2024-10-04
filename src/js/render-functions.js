import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import errorIconUrl from "../img/error.svg";
import infoIconUrl from "../img/info.svg";

export const galleryEl = document.querySelector(".gallery");
export const loadMoreBtnEl = document.querySelector(".more-btn");

export const clearGallery = () => {
    galleryEl.innerHTML = '';
}

export const renderImages = images => {
  const markup = images
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
    
    galleryEl.insertAdjacentHTML("beforeEnd", markup);
}

export const showLoader = () => {
    loadMoreBtnEl.insertAdjacentHTML("afterEnd", `<span class="loader"></span>`);
}

export const removeLoader = () => {
    const loaderEl = document.querySelector('.loader');
    loaderEl.remove();
}

export const showElement = (element) => {
    element.classList.remove("visually-hidden");
}

export const hideElement = (element) => {
    element.classList.add("visually-hidden");
}

export const scrollPage = () => {
    const cardHeight = galleryEl.firstElementChild.getBoundingClientRect().height;
    
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
  });
}

export const showErrorNotification = errorMessage => iziToast.error({
    title: '',
    message: errorMessage,
    class: 'custom-noty error',
    position: 'topRight',
    iconUrl: errorIconUrl,
});

export const showInfoNotification = infoMessage => iziToast.info({
    title: '',
    message: infoMessage,
    class: 'custom-noty info',
    position: 'topRight',
    iconUrl: infoIconUrl,
});