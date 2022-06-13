function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
  }
  else {
    localStorage.setItem("dark-mode", "false");
  }
}
