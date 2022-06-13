// create dark mode toggle and store in local storage
const darkModeButton = document.getElementById("dark-mode-button");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
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
