import "./index.css";
import { handleLocation, handleWeatherData, inputCheck } from "./handleLogic";
import { resetSuggestions, animateChangeLayoutForLG } from "./DOM";
import { 
  animateHeader,
  animateSearchBox,
  animateCurrWeatherBox,
  animateWeatherInfoBox, 
  } from "./animScript";

const inputBox = document.querySelector("form input");
const suggestionsBox = document.querySelector("ul");
const searchForm = document.querySelector("#initSearch");


inputBox.addEventListener("input", async () => {
  let query = inputBox.value;
  if (query.length === 0) return;
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

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let query = inputBox.value;
  // maybe I can add a loading shit 
  const weatherCheck = await handleWeatherData(query);  
  if (weatherCheck) {
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      animateHeader();
      animateSearchBox();
    } else {
      animateChangeLayoutForLG();
    }
    animateCurrWeatherBox();
    animateWeatherInfoBox();
  }
  inputBox.value = "";
  inputCheck(inputBox.value);
  resetSuggestions();
})

window.matchMedia("(max-width:1024px)").addEventListener("change", () => {
  if (window.innerWidth < 1024) {
    animateHeader();
    animateSearchBox();
  }
  else {
    animateChangeLayoutForLG();
  }
})




