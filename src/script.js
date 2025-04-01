const API_KEY = 'de847a68d299dabfb47014fb950fbf87'; 
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
let galleryImages;
const galleryElem = document.getElementById("movie_gallery");
let currentPage = 1;
let currentYear = null;

async function drawGalleryItems(year = null, page = 1) {
  currentYear = year;
  currentPage = page;
  const yearParam = year ? `&primary_release_year=${year}` : '';
  const pageParam = `&page=${page}`;
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US${yearParam}${pageParam}`);
  const data = await response.json();
  const itemsData = getItemsData(data.results);
  const items = getItems(itemsData);
  galleryElem.innerHTML = items;
  galleryImages = document.querySelectorAll(".gallery--item_image");
  document.getElementById('currentPageDisplay').textContent = `Page: ${currentPage}`;
  addListeners();
  return data;
}
drawGalleryItems();

const performSearch = () => {
  const yearInput = document.getElementById('yearInput');
  const year = yearInput?.value ? parseInt(yearInput.value) : null;
  resetDetailedView()
  drawGalleryItems(year, 1);
};
function getItemsData(data) {
  return data.map(record => ({
    itemImage: getImage(record.poster_path),
    detailedImage: getImage(record.backdrop_path),
    title: record.title,
    detailedTitle: record.overview
  }));
}
function getItems(itemsData) {
  const items = itemsData.map(getItem);
  return items.join('');
}
function getItem({itemImage, detailedImage, title, detailedTitle}) {
  return `<li class="gallery--item">
          <img
            src="${itemImage}"
            alt="${title + ' image'}"
            class="gallery--item_image"
            data-detailed-image="${detailedImage}"
            data-detailed-title="${detailedTitle}"
          />
          <span class="gallery--item_title">${title} </span>
        </li>`
}
function getImage(imagePath) {
  return imagePath 
    ? `${BASE_IMAGE_URL}${imagePath}` 
    : 'images/dalmatian-spots-mobile.svg';
}
function addListeners() {
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      setDetails(galleryImages[i]);
    });
  }
}
function nextPage() {
  currentPage++;
  drawGalleryItems(currentYear, currentPage);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    drawGalleryItems(currentYear, currentPage);
  }
}

function backButton() {
  resetDetailedView()
  drawGalleryItems();
}

function resetDetailedView() {
  detailedImage.src = 'images/dalmatian-spots-mobile.svg';
  detailedTitle.innerHTML = 'Popular Movies Gallery<span class="for_ellipsis">...</span>';
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
  setTimeout(function () {
    detailedImage.classList.add("animation-up");
    detailedTitle.classList.add("animation-down");
  }, 0);
}