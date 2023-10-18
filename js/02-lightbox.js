import { galleryItems } from "./gallery-items.js";

const rootGallery = document.querySelector(".gallery");
const imageGallery = createGallery(galleryItems);

function createGallery(arrOfObj) {
  return arrOfObj
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
    `;
    })
    .join("");
}

rootGallery.insertAdjacentHTML("afterbegin", imageGallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
  overlay: true,
  showCounter: false,
  fadeSpeed: 200,
  close: true,
  showCounter: true,
});
