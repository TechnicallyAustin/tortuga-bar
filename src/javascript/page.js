// creates the API for the pag

export function createPage() {
  const content = document.body.appendChild(document.createElement("div"));
  content.setAttribute("class", "content w-100 h-100 bg-dark");

  const header = content.appendChild(document.createElement("header"));
  header.setAttribute("class", "header col-12 bg-info");

  const nav = header.appendChild(document.createElement("nav"));
  nav.setAttribute("class", "nav col-12 bg-warning d-flex justify-content-around align-items-center");

  const title = nav.appendChild(document.createElement("h1"));
  title.setAttribute("class", "title nav-item col-5 ")
  title.textContent = "Technically Bar";

  const list = nav.appendChild(document.createElement("ul"))
  list.setAttribute("class", "navbar col-6 list-group list-group-horizontal list-unstyled");

  const items =["item 1","item 2","item 3"]
  for (let item of items){
    let listItem = list.appendChild(document.createElement("li"));
    listItem.setAttribute("class", "nav-item")
    
    let link = listItem.appendChild(document.createElement("a"))
    link.setAttribute("class", "nav-link list-group-item")
    link.setAttribute("href","#")
    link.textContent = item
  }

  const main = content.appendChild(document.createElement("main"));
  main.setAttribute("class", "main");

  const footer = content.appendChild(document.createElement("footer"));
  footer.setAttribute("class", "footer");
}

const newPage = () => {
    const content = document.body.appendChild(document.createElement("div"));
    const header = () => {}
    const navbar = () => {}
    const main = () => {}
    const footer = () => {}
    const build = () => {
        console.log("building")
    }
    return {content, header, navbar, main, footer, build}
}


newPage().build()


