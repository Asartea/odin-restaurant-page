const createButton = (name, id) => {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = name;
  button.classList = "button header-button";
  return button
};

export default createButton;
