import append from "../functions/append";
import toHTML from "../functions/toHTML";

const main = () => {
  const html = `<main class="px-16 py-5 flex flex-col justify-center" id="main"></main>`;
  const mainDiv = toHTML(html);
  append(mainDiv, "content");
};

export default main;
