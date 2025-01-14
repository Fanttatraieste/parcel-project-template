import { galleryItems } from './gallery-items.js';
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";


const runLightBox2 = function() {
    const gallery = document.querySelector(".gallery");


for (let i = 0; i < galleryItems.length; i++) {
    const element = galleryItems[i];
    const index = i;

    const {preview, original, description} = element;
    const item = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");


    image.src = preview;
    image.alt = description;
    link.href = original;

    image.classList.add("gallery__image");
    link.classList.add("gallery__link");
    
    link.appendChild(image);
    item.appendChild(link);


    gallery.appendChild(item);
}

const galleryLink = document.querySelectorAll(".gallery__link");
galleryLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});


//simplelightbox
var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}

module.exports = runLightBox2; 