import header from "../header/header";
import home from "../home/home";
import eventListenerSetup from "./eventListenerSetup";

const initialLoad = () => {
  header();
  eventListenerSetup();
  home();
};

export default initialLoad;
