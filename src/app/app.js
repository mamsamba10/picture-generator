const galleryContainer = document.querySelector(".gallery-container");
const randomButton = document.querySelector(".random-image");
const image = document.querySelector("img");

function getPhotos() {
  let randomSeed = 100;
  let randomSeedFloor = Math.floor(Math.random() * randomSeed);

  const photosUrl = `https://picsum.photos/seed/${randomSeedFloor}/300`;

  image.src = photosUrl;
}

randomButton.addEventListener("click", (e) => {
  e.preventDefault();
  getPhotos();
});
