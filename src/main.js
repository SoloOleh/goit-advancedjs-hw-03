import { getPhotos } from './js/pixabay-api';
import {
  clearGallery,
  createImageCardsMarkup,
  renderGallery,
  refreshLightbox,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(galleryRef);

  fetchImages(query);
}

function fetchImages(query) {
  loader.style.display = 'inline-block';

  getPhotos(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = createImageCardsMarkup(data.hits);
      renderGallery(galleryRef, markup);
      refreshLightbox();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
