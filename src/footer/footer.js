import append from "../functions/append";
import toHTML from "../functions/toHTML";

const footer = () => {
  const currentYear = new Date().getUTCFullYear();
  const html = `<footer class="flex justify-around px-4 py-3 bg-gradient-to-r from-rose-600 to-rose-800" id="footer">
            <span>Copyright &copy; ${currentYear} Asartea </span>
        </footer>
    `;
  const footerDiv = toHTML(html);
  append(footerDiv, "content");
};

export default footer;
