import "./vendor";

// This script handles the dark mode toggle functionality
// and saves the user's preference in local storage.

// Check if dark mode is enabled in local storage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
}

// Toggle dark mode when the button is clicked
document.querySelector(".toggle-dark-mode")?.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark") ? "true" : "false");
});

// All images under .post-inner-content should have data-action="zoom", unless they have a class of "no-zoom" or data-action="none"
document.querySelectorAll(".post-inner-content img")?.forEach((img) => {
  if (img && !img.classList.contains("no-zoom") && img.getAttribute("data-action") !== "none") {
    img.setAttribute("data-action", "zoom");
  }
});
