const header = document.querySelector("#header");
const searchBox = document.querySelector("#searchBox");

export function animateHeader() {
    header.classList.remove("mt-8");
    header.classList.add("mt-2");
}

export function animateSearchBox() {
    searchBox.classList.remove("mt-24");
    searchBox.classList.add("mt-4");
}