// create dark mode toggle and store in local storage
let darkMode = localStorage.getItem("darkMode");
const darkModeButton = document.querySelector("#dark-mode-button");

const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
}

darkModeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});
