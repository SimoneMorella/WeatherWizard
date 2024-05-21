const header = document.querySelector("#header");
const searchBox = document.querySelector("#searchBox");

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