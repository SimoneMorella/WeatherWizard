const header = document.querySelector("#header");
const searchBox = document.querySelector("#searchBox");
const currentWeatherBox = document.querySelector("#weatherData");
const weatherInfoBox = document.querySelector("#rightPartLG");

export function animateHeader() {
    if (header.classList.contains("mt-2")) return;
    header.classList.remove("mt-8");
    header.classList.add("mt-2");
}

export function animateSearchBox() {
    if (searchBox.classList.contains("mt-2")) return;
    searchBox.classList.remove("mt-24");
    searchBox.classList.add("mt-2");
}

export function animateCurrWeatherBox() {
    if (!currentWeatherBox.classList.contains("hidden")) return;
    currentWeatherBox.classList.remove("hidden");
    currentWeatherBox.classList.add("animate-fadeUp");
}

export function animateWeatherInfoBox() {
    if (weatherInfoBox.classList.contains("flex")) return;
    weatherInfoBox.classList.remove("hidden");
    weatherInfoBox.classList.add("flex");
    weatherInfoBox.classList.add("animate-fadeUp");
}



