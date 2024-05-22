import { formatDateForCurrent, formatTimeForCurrent } from "./handleLogic";

const suggestions = document.querySelector("#suggestions");
const spinLoader = document.querySelector("#spinLoader");
const submitArrow = document.querySelector("button[type='submit']");
const cityBox = document.querySelector("#cityName");
const dateBox = document.querySelector("#date");
const timeBox = document.querySelector("#time");
const currentTempBox = document.querySelector("#currentTemp");
const minMaxBox = document.querySelector("#min-max");
const weatherStatusBox = document.querySelector("#weatherStatus");
const statusImgBox = document.querySelector("#statusImg");
const feltTempBox = document.querySelector("#feltTemp");
const rainChanceBox = document.querySelector("#rainChance");
const humidityBox = document.querySelector("#humidity");
const windSpeedBox = document.querySelector("#windSpeed");
const uvIndexBox = document.querySelector("#uvIndex");
const hourOneBox = document.querySelector("#hour-one");
const hourOneImgBox = document.querySelector("#hour-one-img");
const hourOneMinBox = document.querySelector("#hour-one-min");
const hourOneMaxBox = document.querySelector("#hour-one-max");
const hourTwoBox = document.querySelector("#hour-two");
const hourTwoImgBox = document.querySelector("#hour-two-img");
const hourTwoMinBox = document.querySelector("#hour-two-min");
const hourTwoMaxBox = document.querySelector("#hour-two-max");
const hourThreeBox = document.querySelector("#hour-three");
const hourThreeImgBox = document.querySelector("#hour-three-img");
const hourThreeMinBox = document.querySelector("#hour-three-min");
const hourThreeMaxBox = document.querySelector("#hour-three-max");
const dayOneBox = document.querySelector("#day-one");
const dayOneImgBox = document.querySelector("#day-one-img");
const dayOneMinBox = document.querySelector("#day-one-min");
const dayOneMaxBox = document.querySelector("#day-one-max");
const dayTwoBox = document.querySelector("#day-two");
const dayTwoImgBox = document.querySelector("#day-two-img");
const dayTwoMinBox = document.querySelector("#day-two-min");
const dayTwoMaxBox = document.querySelector("#day-two-max");
const dayThreeBox = document.querySelector("#day-three");
const dayThreeImgBox = document.querySelector("#day-three-img");
const dayThreeMinBox = document.querySelector("#day-three-min");
const dayThreeMaxBox = document.querySelector("#day-three-max");

export function manageCurrentWeatherValues(
  city,
  region,
  date,
  cTemp,
  minTemp,
  maxTemp,
  status,
  statusImg
) {
  cityBox.textContent = `${city}, ${region}`;
  dateBox.textContent = formatDateForCurrent(date); // here I have to see how to format the date;
  timeBox.textContent = formatTimeForCurrent(date); //same as above
  currentTempBox.textContent = `${cTemp}°c`;
  minMaxBox.textContent = `${minTemp}°c / ${maxTemp}°c`;
  weatherStatusBox.textContent = status;
  statusImgBox.src = statusImg; //check the url good
}

export function manageInfoBoxValues(
  feltTemp,
  rainChance,
  humidity,
  windSpeed,
  uvIndex
) {
  feltTempBox.textContent = `${feltTemp}°c`;
  rainChanceBox.textContent = `${rainChance}%`;
  humidityBox.textContent = `${humidity}%`;
  windSpeedBox.textContent = `${windSpeed}km/h`;
  uvIndexBox.textContent = uvIndex;
}

export function manageFirstHourValues(
  hourOne,
  hourOneImg,
  hourOneMin,
  hourOneMax
) {
  hourOneBox.textContent = hourOne; // write function to define which one is the next hour
  hourOneImgBox.src = `${hourOneImg}`;
  hourOneMinBox.textContent = hourOneMin;
  hourOneMaxBox.textContent = hourOneMax;
}

export function manageSecondHourValues(
  hourTwo,
  hourTwoImg,
  hourTwoMin,
  hourTwoMax
) {
  hourTwoBox.textContent = hourTwo; 
  hourTwoImgBox.src = `${hourTwoImg}`;
  hourTwoMinBox.textContent = hourTwoMin;
  hourTwoMaxBox.textContent = hourTwoMax;
}

export function manageThirdHourValues(
  hourThree,
  hourThreeImg,
  hourThreeMin,
  hourThreeMax
) {
  hourThreeBox.textContent = hourThree; 
  hourThreeImgBox.src = `${hourThreeImg}`;
  hourThreeMinBox.textContent = hourThreeMin;
  hourThreeMaxBox.textContent = hourThreeMax;
}

export function manageFirstDayValues(
  dayOne,
  dayOneImg,
  dayOneMin,
  dayOneMax
) {
  dayOneBox.textContent = dayOne; // write function to define which one is the next day
  dayOneImgBox.src = `${dayOneImg}`;
  dayOneMinBox.textContent = dayOneMin;
  dayOneMaxBox.textContent = dayOneMax;
}

export function manageSecondDayValues(
  dayTwo,
  dayTwoImg,
  dayTwoMin,
  dayTwoMax
) {
  dayTwoBox.textContent = dayTwo; 
  dayTwoImgBox.src = `${dayTwoImg}`;
  dayTwoMinBox.textContent = dayTwoMin;
  dayTwoMaxBox.textContent = dayTwoMax;
}

export function manageThirdDayValues(
  dayThree,
  dayThreeImg,
  dayThreeMin,
  dayThreeMax
) {
  dayThreeBox.textContent = dayThree; 
  dayThreeImgBox.src = `${dayThreeImg}`;
  dayThreeMinBox.textContent = dayThreeMin;
  dayThreeMaxBox.textContent = dayThreeMax;
}


export function createSuggestions(name, region) {
  const suggestion = document.createElement("li");
  suggestion.classList.add("btn-li");
  suggestion.textContent = `${name}, ${region}`;
  suggestions.appendChild(suggestion);
}

export async function resetSuggestions() {
  await removeSuggestions();
  while (suggestions.firstChild) {
    suggestions.removeChild(suggestions.firstChild);
  }
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 400));
}

export async function removeSpinLoader() {
  spinLoader.classList.remove("animate-fadeIn");
  spinLoader.classList.add("animate-fadeOut");
  await delay();
  spinLoader.classList.add("hidden");
}

export function removeSpinNoAnim() {
  spinLoader.classList.add("hidden");
}

export function removeArrowNoAnim() {
  submitArrow.classList.add("hidden");
}

export function showSpinLoader() {
  spinLoader.classList.remove("animate-fadeOut");
  spinLoader.classList.add("animate-fadeIn");
  spinLoader.classList.remove("hidden");
}

export function showSubmitArrow() {
  submitArrow.classList.remove("animate-fadeOut");
  submitArrow.classList.add("animate-fadeIn");
  submitArrow.classList.remove("hidden");
}

export async function removeSubmitArrow() {
  submitArrow.classList.remove("animate-fadeIn");
  submitArrow.classList.add("animate-fadeOut");
  await delay();
  submitArrow.classList.add("hidden");
}

async function removeSuggestions() {
  suggestions.classList.remove("animate-fadeInNoScale");
  suggestions.classList.add("animate-fadeOutNoScale");
  await delay();
  suggestions.classList.add("hidden");
}

export function showSuggestions() {
  suggestions.classList.remove("animate-fadeOutNoScale");
  suggestions.classList.add("animate-fadeInNoScale");
  suggestions.classList.remove("hidden");
}
