import "./header.css";
import append from "../functions/append";
import createButton from "./helpers/createButton";

const header = () => {
  const headerDiv = document.createElement("nav");
  headerDiv.id = "header";
  headerDiv.className = "header";
  const homeButton = createButton("Home", "home-button");
  headerDiv.appendChild(homeButton);
  const navContainer = document.createElement("div")
  navContainer.className = "nav-container"
  const menuButton = createButton("Menu", "menu-button");
  const aboutButton = createButton("About", "about-button");
  const contactButton = createButton("Contact", "contact-button");
  navContainer.appendChild(menuButton);
  navContainer.appendChild(aboutButton);
  navContainer.appendChild(contactButton);
  headerDiv.appendChild(navContainer)
  append(headerDiv);
};

export default header;
