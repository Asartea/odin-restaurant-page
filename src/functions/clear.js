const clear = () => {
  const main = document.getElementById("main");
  while (main.children.length > 0) {
    main.children[0].remove();
  }
};

export default clear;
