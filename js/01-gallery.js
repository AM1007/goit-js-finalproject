import { galleryItems } from "./gallery-items.js";

const rootGallery = document.querySelector(".gallery");
const imageGallery = createGallery(galleryItems);

function createGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}

rootGallery.insertAdjacentHTML("afterbegin", imageGallery);

// Cтворюємо хендлєр відкриття модального вікна по кліку на зображення

rootGallery.addEventListener("click", handleClickOnImage);

function handleClickOnImage(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}", width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();

  // Закриття модального вікна по натиску на Escape

  function onEscape(evt) {
    const ESC_KEY_CODE = "Escape";
    if (evt.code === ESC_KEY_CODE) {
      instance.close();
    }
  }
}
