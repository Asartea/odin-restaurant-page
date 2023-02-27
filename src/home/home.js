import append from "../functions/append";

const home = () => {
  const placeHolder = document.createElement("div");
  placeHolder.textContent = "Home - WIP";
  append(placeHolder);
};

export default home;
