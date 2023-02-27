import append from "../functions/append";
import toHTML from "../functions/toHTML";

const header = () => {
  const html = `<banner class="flex justify-between px-4 py-3 bg-gradient-to-r from-rose-600 to-rose-800" id="header">
    <button class="pl-2 text-3xl text-rose-50" id="home-button">Home</button>
    <span class="m-1 text-5xl text-rose-200" id="title">Artisan Dove Restaurant</span>
    <nav class="flex justify-between text-rose-50">
      <button class="mx-3" id="menu-button">Menu</button>
      <button class="mx-3" id="about-button">About</button>
      <button class="mx-3" id="contact-button">Contact</button>
    </div>
  </nav>
  `;
  const headerDiv = toHTML(html);
  append(headerDiv);
};

export default header;
