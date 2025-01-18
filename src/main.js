import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  showImages,
  showErrorMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

document
  .querySelector('.search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const query = document.querySelector('.search-input').value.trim();

    if (!query) {
      return;
    }

    clearGallery();
    showLoadingIndicator();

    fetchImages(query)
      .then(images => {
        hideLoadingIndicator();
        showImages(images);
      })
      .catch(error => {
        hideLoadingIndicator();
        showErrorMessage();
        console.error(error);
      });
  });
