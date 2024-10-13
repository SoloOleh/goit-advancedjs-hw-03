import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Ініціалізація SimpleLightbox з опціями
let gallery = new SimpleLightbox('.gallery-item a', {
  captionDelay: 250, // Затримка перед показом підпису
  captionsData: 'alt', // Показувати підписи з атрибута alt
});

// Функція для очищення галереї перед новим пошуком
function clearGallery(galleryRef) {
  galleryRef.innerHTML = '';
}

// Функція для створення розмітки карток зображень
function createImageCardsMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <div class="photo-card gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${likes}</p>
          <p class="info-item"><b>Views</b> ${views}</p>
          <p class="info-item"><b>Comments</b> ${comments}</p>
          <p class="info-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </div>
      `
    )
    .join('');
}

// Функція для додавання карток у DOM
function renderGallery(galleryRef, markup) {
  galleryRef.insertAdjacentHTML('beforeend', markup);
}

// Функція для оновлення SimpleLightbox після додавання нових зображень
function refreshLightbox() {
  gallery.refresh(); // Знищення та повторна ініціалізація SimpleLightbox для оновлених елементів
}

export { clearGallery, createImageCardsMarkup, renderGallery, refreshLightbox };
