import append from "../functions/append";
import toHTML from "../functions/toHTML";

const menu = () => {
  const html = `<div class="px-16 py-5 flex flex-col justify-center">
  <h1 class="text-center text-3xl text-rose-100">Menu</h1>
  <div class=" min-h-96 mx-36 my-3 text-center text-l text-rose-50 grid grid-rows-3 grid-cols-3 gap-5">
  <div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
<div>
  <h2 class="text-xl">Lorem ipsum</h2>
  <p class="m-2 text-lg">Lorem ipsum dolar amet, lorem ipsum dolar amet</p>
</div>
  </div>`;
  const menuDiv = toHTML(html);
  append(menuDiv, "main");
};

export default menu;
