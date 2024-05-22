import "./index.css";
import { handleLocation, handleWeatherData, inputCheck } from "./handleLogic";
import { resetSuggestions } from "./DOM";
import { 
  animateHeader,
  animateSearchBox,
  animateCurrWeatherBox,
  animateWeatherInfoBox } from "./animScript";

const inputBox = document.querySelector("form input");
const suggestionsBox = document.querySelector("ul");
const searchForm = document.querySelector("#initSearch");


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
  handleWeatherData(query);
  animateHeader();
  animateSearchBox();
  animateCurrWeatherBox();
  animateWeatherInfoBox();
  // add inputBox reset later
})

// this function later I put them in another module probably





