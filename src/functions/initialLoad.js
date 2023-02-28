import footer from "../footer/footer";
import header from "../header/header";
import home from "../home/home";
import main from "../main/main";
import eventListenerSetup from "./eventListenerSetup";

const initialLoad = () => {
  const content = document.getElementById("content");
  content.classList =
    "bg-gradient-to-br from-rose-300 to-rose-500 min-h-screen grid gap-6 grid-template-cols-1fr grid-rows-[100px_1fr_50px]";
  header();
  main();
  eventListenerSetup();
  home();
  footer();
};

export default initialLoad;
