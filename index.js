import { galleryItems } from "./app.js";

// const { preview, original, description } = galleryItems
const imagesList = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.js-lightbox')
const overlay = document.querySelector('.lightbox__overlay')
const lightboxImage = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')

const createGalery = galleryItems.reduce((acc, elem) => {
  return acc + `<li class="gallery__item">
  <a class="gallery__link" href=${elem.original}
  >
    <img
      class="gallery__image"
      src=${elem.preview}
      data-source=${elem.original}
      alt=${elem.description}
    />
  </a>
</li>`
}, '')

imagesList.insertAdjacentHTML('beforeend', createGalery)

imagesList.addEventListener('click', clickOnImage)

function clickOnImage(event) {
  event.preventDefault();
  const galleryImage = event.target.classList.contains('gallery__image')
  if (!galleryImage) {
    return
  }
  lightboxImage.src = event.target.dataset.source;
  lightbox.classList.add('is-open')
}

closeBtn.addEventListener('click', closeLightbox)

function closeLightbox() {
  lightboxImage.src = '';
  lightbox.classList.remove('is-open')
}