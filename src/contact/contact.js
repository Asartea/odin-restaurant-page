import append from "../functions/append";
import toHTML from "../functions/toHTML";

const contact = () => {
  const html = `<div class="px-16 py-5 flex flex-col justify-center">
  <h1 class="text-center text-3xl text-rose-100">Contact</h1>
  <div class=" min-h-96 mx-36 my-3 text-center text-l text-rose-50 flex flex-col justify-center gap-5">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta sodales odio, nec mollis magna aliquet eu. Aenean a quam sodales, mattis nulla in, ultricies purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus risus, faucibus vel semper et, gravida eu ipsum. In tempus pharetra lobortis. Aliquam erat volutpat. Maecenas arcu ante, pretium in maximus non, luctus et lectus. Maecenas sed suscipit eros. Maecenas efficitur eu elit sed congue. Praesent pulvinar nisi a dui tincidunt varius. Ut eget sem lorem.
    </p>
    <p>
      Etiam luctus placerat dui ut maximus. Nunc ut libero sed nunc tempor venenatis ac at erat. Morbi nec congue tortor. Mauris aliquet vehicula mi, eget dapibus ligula. Nam tincidunt condimentum turpis nec semper. Praesent rutrum mi vel nisi congue, tincidunt tempor massa venenatis. Praesent pharetra a sem a efficitur. Morbi tempus a nisl non pharetra. Etiam tellus purus, tincidunt non efficitur quis, molestie nec elit. Integer gravida consequat risus, facilisis facilisis magna vestibulum hendrerit. 
    </p>
    <p>
      Mauris fermentum sed eros sed bibendum. Nullam in mi quis ligula aliquet placerat sit amet cursus odio. Nullam luctus sapien at vestibulum fermentum. Maecenas massa risus, porta at accumsan at, facilisis in ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pulvinar at nulla eget varius. Maecenas eros nulla, viverra eget finibus non, tincidunt id sapien. Duis ut ultricies sem. Sed nisi risus, vehicula a venenatis vel, blandit id nisi. Ut pellentesque convallis augue, nec porta massa efficitur vitae. Mauris diam erat, euismod ut felis id, molestie pellentesque erat. Fusce id magna ut turpis rutrum venenatis. Ut id sem in lectus laoreet euismod. Pellentesque quis neque et libero ornare mattis. Nam vestibulum purus ac ipsum euismod lobortis id et dolor. Cras ac blandit risus. 
    </p>
  </div>
</div>`;
  const aboutDiv = toHTML(html);
  append(aboutDiv, "main");
};

export default contact;
