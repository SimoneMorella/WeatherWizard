import "./index.css";
import { fetchLocationOnInput, fetchForecastInfo } from "./fetchLogic";
import {
  createSuggestions,
  resetSuggestions,
  removeSpinLoader,
  showSpinLoader,
  showSubmitArrow,
  removeSubmitArrow,
  showSuggestions
} from "./DOM";

const inputBox = document.querySelector("form input");
const suggestionsBox = document.querySelector("ul");
const searchForm = document.querySelector("#initSearch");

let search = "Barletta, Puglia";

async function fetchCurrentWeatherData(search) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=329fad4d4a1143e7bd2154311241705&q=${search}`
    );
    let weatherData = await response.json();
    console.log(weatherData);
    //insert the weather Data inside a box
  } catch (error) {
    console.log(error);
  }
}

// forecast function gives also current so use only 1 function
//




inputBox.addEventListener("input", async () => {
  let query = inputBox.value;
  if (query.length === 0) return;
  console.log(query.length);
  inputCheck(query);
  await handleLocation(query);
  inputCheck(inputBox.value);
});

inputBox.addEventListener("input", () => {
  inputCheck(inputBox.value);
})

suggestionsBox.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    inputBox.value = e.target.textContent;
    resetSuggestions();
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let query = inputBox.value;
  fetchForecastInfo(query);
})


async function handleLocation(query) {
  let lData = await fetchLocationOnInput(query);
  await removeSubmitArrow();
  showSpinLoader();
  await resetSuggestions();
  if (lData.length === 0) return;
  lData.forEach((location) => {
    createSuggestions(location.name, location.region);
  });
  showSuggestions();
  await removeSpinLoader();
  showSubmitArrow();
}

function inputCheck(query) {
  if (query.length === 0) {
    removeSpinLoader();
    removeSubmitArrow();
    return;
  } else if (query.length < 3) {
    removeSubmitArrow();
  } else {
    removeSpinLoader();
  }
}

