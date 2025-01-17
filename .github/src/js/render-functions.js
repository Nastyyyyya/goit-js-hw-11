import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showImages(images) {
  const gallery = document.querySelector('.gallery');

  images.forEach(image => {
    const imageCard = `
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
        <div class="image-info">
          <p>Likes: <span>${image.likes}</span></p>
          <p>Views: <span>${image.views}</span></p>
          <p>Comments: <span>${image.comments}</span></p>
          <p>Downloads: <span>${image.downloads}</span></p>
        </div>
      </a>
    `;
    gallery.insertAdjacentHTML('beforeend', imageCard);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    showCounter: false,
  });
  lightbox.refresh();
}

export function showErrorMessage() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function showLoadingIndicator() {
  const loading = document.querySelector('.loading');
  loading.style.display = 'block';
}

export function hideLoadingIndicator() {
  const loading = document.querySelector('.loading');
  loading.style.display = 'none';
}
