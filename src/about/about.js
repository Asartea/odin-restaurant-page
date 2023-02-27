import append from "../functions/append";

const about = () => {
  const placeHolder = document.createElement("div");
  placeHolder.textContent = "About - WIP";
  append(placeHolder);
};

export default about;
