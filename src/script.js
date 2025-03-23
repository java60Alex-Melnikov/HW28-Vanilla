const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const gallery = document.querySelector(".gallery");

async function fetchCatBreeds() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();
    const validBreeds = data.filter(breed => breed.reference_image_id);
    fillGallery(validBreeds);
  } catch (error) {
    console.error("Error fetching cat breeds:", error);
  }
}

function fillGallery(breeds) {
  const galleryItems = breeds.map(breed => {
    const imageUrl = `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`;
    const breedName = breed.name || "Unknown";
    const description = breed.description || "Description not available";
    
    return `
      <li class="gallery--item">
        <img
          src="${imageUrl}"
          alt="${breedName}"
          class="gallery--item_image"
          data-detailed-image="${imageUrl}"
          data-detailed-title="${description}"
        />
        <span class="gallery--item_title">${breedName}</span>
      </li>
    `;
  }).join("");
  
  gallery.innerHTML = galleryItems;
  const galleryImages = document.querySelectorAll(".gallery--item_image");
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function() {
      setDetails(galleryImages[i]);
    });
  }
}

function setDetails(galleryImage) {
  let image = galleryImage.getAttribute("data-detailed-image");
  detailedImage.src = "";
  detailedImage.src = image;
  detailedTitle.innerHTML =
    galleryImage.getAttribute("data-detailed-title") +
    '<span class="for_ellipsis">...</span>';
  animate();
}

function animate() {
  detailedImage.classList.remove("animation-up");
  detailedTitle.classList.remove("animation-down");
  setTimeout(function() {
    detailedImage.classList.add("animation-up");
    detailedTitle.classList.add("animation-down");
  }, 0);
}

fetchCatBreeds();