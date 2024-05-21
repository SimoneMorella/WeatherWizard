const suggestions = document.querySelector("#suggestions");
const spinLoader = document.querySelector("#spinLoader");
const submitArrow = document.querySelector("button[type='submit']");
const cityBox = document.querySelector("#cityName");
const dateBox = document.querySelector("#date");
const timeBox = document.querySelector("#time");
const currentTempBox = document.querySelector("#currentTemp");
const minMaxBox = document.querySelector("#min-max");
const weatherStatusBox = document.querySelector("#weatherStatus");
const statusImg = document.querySelector("#statusImg");

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
