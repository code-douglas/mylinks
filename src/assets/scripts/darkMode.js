const backgroundContainer = document.querySelector(".container");
const buttonDarkMode = document.querySelector(".top-element");
const links = document.querySelectorAll(".link");
const greeting = document.querySelector("#greeting");

buttonDarkMode.addEventListener("click", () => {
  backgroundContainer.classList.toggle("dark");
  greeting.classList.toggle("dark");

  links.forEach(link => link.classList.toggle("dark"));

  buttonDarkMode.classList.toggle("dark");

  const icon = buttonDarkMode.querySelector("i");
  if (backgroundContainer.classList.contains("dark")) {
    icon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
  } else {
    icon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
  }
});
