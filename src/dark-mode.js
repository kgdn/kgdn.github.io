// create dark mode toggle and store in local storage
const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    darkModeButton.innerHTML = "🌙";
    localStorage.setItem("darkMode", "disabled");
    document.body.classList.remove("dark-mode");
  } else {
    darkModeButton.innerHTML = "🌞";
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("dark-mode");
  }
});
