import clear from "./clear";
import home from "../home/home";
import menu from "../menu/menu";
import about from "../about/about";
import contact from "../contact/contact";

const eventListenerSetup = () => {
  const homeButton = document.getElementById("home-button");
  const menuButton = document.getElementById("menu-button");
  const aboutButton = document.getElementById("about-button");
  const contactButton = document.getElementById("contact-button");

  homeButton.addEventListener("click", () => {
    clear();
    home();
  });
  menuButton.addEventListener("click", () => {
    clear();
    menu();
  });
  aboutButton.addEventListener("click", () => {
    clear();
    about();
  });
  contactButton.addEventListener("click", () => {
    clear();
    contact();
  });
};

export default eventListenerSetup;
