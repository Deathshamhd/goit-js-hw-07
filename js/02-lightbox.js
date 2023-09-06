// Importing the gallery items from the external file
import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// Create a SimpleLightbox instance and pass the selector for the gallery items
const lightbox = new SimpleLightbox(".gallery__item a", {
  // Specify the caption selector and captions source
  captionsSelector: "img",
  captionsData: "alt",
});

// Function to create the HTML markup for each image item
function createImgMarkup(imgs) {
  return imgs
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
          </a>
       </div>`
    )
    .join("");
}

// Function to handle clicks on the image container
function onImgContainerClick(event) {
  event.preventDefault();

  // Check if the clicked element is an image element
  const isImageEl = event.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }

  // Open the lightbox for the clicked image
  lightbox.open();
}

// Add a click event listener to the gallery container to handle image clicks
galleryRef.addEventListener("click", onImgContainerClick);