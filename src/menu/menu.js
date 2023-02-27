import "./menu.css";
import append from "../functions/append";

const menu = () => {
  const placeHolder = document.createElement("div");
  placeHolder.textContent = "Menu - WIP";
  append(placeHolder);
};

export default menu;
