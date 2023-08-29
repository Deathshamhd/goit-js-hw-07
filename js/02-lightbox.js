import { galleryItems } from './gallery-items.js';
// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createImgMarkup(galleryItems);


galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// Add a click event listener to the gallery container to handle image clicks
galleryRef.addEventListener("click", onImgContainerClick);

// Function to create the HTML markup for each image item
function createImgMarkup(imgs) {
  return imgs
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src='${item.preview}'
                data-source='${item.original}'
                alt='${item.description}'
            />
          </a>
       </div>`
    )
    .join("");
}

// Create a basicLightbox instance with an empty image element and event handlers
let img = basicLightbox.create(
  `<img width="800" height="600">`,
  {
    // Event handler when the lightbox is shown
    onShow: (instance) => {
      window.addEventListener("keydown", onModalClose);
    },
  },
  {
    // Event handler when the lightbox is closed
    onClose: (instance) => {
      window.removeEventListener("keydown", onModalClose);
    },
  }
);

// Function to close the lightbox when the Escape key is pressed
function onModalClose(evt) {
  if (evt.code === "Escape") {
    img.close();
  }
}

// Function to handle clicks on the image container
function onImgContainerClick(event) {
  event.preventDefault();

  // Check if the clicked element is an image element
  const isImageEl = event.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }

  // Get the URL of the larger image from the data-source attribute
  let imgBigUrl = event.target.dataset.source;

  // Set the source of the image element in the lightbox instance to the larger image URL
  img.element().querySelector("img").setAttribute("src", imgBigUrl);

  // Show the lightbox with the larger image
  img.show();
}

console.log(galleryItems);


console.log(galleryItems);
