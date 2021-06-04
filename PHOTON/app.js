// Creating elements
const apiKey = "563492ad6f917000010000016de86b737ac44ab5bf95006e08739206";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 1;
let fetchLink;
let currentSearch;

// Adding event listeners:
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  searchPhoto(searchValue);
  currentSearch = searchValue;
  e.preventDefault();
});
more.addEventListener("click", () => {
  loadMore(currentSearch);
});

// Creating functions:
function updateInput(e) {
  searchValue = e.target.value;
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
    <div class='gallery-info'>
    <a href="${photo.photographer_url}" target = "_blank">
    <H3>${photo.photographer}</H3>
    </a>
    <a href="${photo.src.original}" target = "_blank">Download</a>
    </div>
    <img src=${photo.src.large}>
    `;
    gallery.appendChild(galleryImg);
  });
}

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: apiKey,
    },
  });
  const data = await dataFetch.json();
  return data;
}

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated";
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

async function searchPhoto(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}`;
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

async function loadMore(query) {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
  }
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

curatedPhotos();
