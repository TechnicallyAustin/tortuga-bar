// creates the API for the pag
import "bootstrap";
import "jquery";
import "popper.js";
export function createPage(){
    const content = document.body.appendChild(document.createElement("div"));
    content.setAttribute("class", "content w-100 h-25")

    const header = content.appendChild(document.createElement("header"));
    header.setAttribute("class", "header w-100 h-25 bg-info")

    const nav = header.appendChild(document.createElement("nav"));
    nav.setAttribute("class","nav")
    const title = nav.appendChild(document.createElement("h1"))
    title.textContent = "Technically Bar"

    const main = content.appendChild(document.createElement("main"));
    main.setAttribute("class", "main")

    const footer = content.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer")
};
