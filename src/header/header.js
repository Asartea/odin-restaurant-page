import "./header.css";
import append from "../functions/append";
import createButton from "./helpers/createButton";

const header = () => {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";
  headerDiv.class = "header";
  const homeButton = createButton("Home", "home-button");
  const menuButton = createButton("Menu", "menu-button");
  const aboutButton = createButton("About", "about-button");
  const contactButton = createButton("Contact", "contact-button");
  headerDiv.appendChild(homeButton);
  headerDiv.appendChild(menuButton);
  headerDiv.appendChild(aboutButton);
  headerDiv.appendChild(contactButton);
  append(headerDiv);
};

export default header;
