const append = (element, id) => {
  const content = document.getElementById(id);
  content.appendChild(element);
};

export default append;
