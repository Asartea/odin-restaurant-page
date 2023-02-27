const toHTML = (str) => document.createRange().createContextualFragment(str.trim()).firstChild

export default toHTML;
