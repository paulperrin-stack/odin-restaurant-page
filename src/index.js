import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";
import "./style.css";

console.log("It works!");

// Load home by default
loadHomePage();

// Tab switching
document.getElementById("home-btn").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadHomePage();
});

document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadMenuPage();
});

document.getElementById("about-btn").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadAboutPage();
});