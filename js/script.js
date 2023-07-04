// Cats API

const button = document.querySelector(".card__btn");
const image = document.querySelector(".card__image");
const url = "https://api.thecatapi.com/v1/images/search";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  if (image.complete) {
    fetchHandler();
  }
});