  //creates the API for the page

  export function newPage() {
  const content = document.body.appendChild(document.createElement("div"));
  content.setAttribute("class", "content bg-dark");

  // Header
  const header = content.appendChild(document.createElement("header"));
  header.setAttribute("class", "header col-12 bg-info");

  // nav
  const nav = header.appendChild(document.createElement("nav"));
  nav.setAttribute(
    "class",
    "nav col-12 bg-warning d-flex justify-content-around align-items-center"
  );

  // nav title
  const title = nav.appendChild(document.createElement("h1"));
  title.setAttribute("class", "title nav-item col-5 ");
  title.textContent = "Technically Bar";

  // nav list
  const list = nav.appendChild(document.createElement("ul"));
  list.setAttribute(
    "class",
    "navbar col-6 list-group list-group-horizontal list-unstyled"
  );

  // nav list items
  const items = ["item 1", "item 2", "item 3"];
  for (let item of items) {
    let listItem = list.appendChild(document.createElement("li"));
    listItem.setAttribute("class", "nav-item");

    let link = listItem.appendChild(document.createElement("a"));
    link.setAttribute("class", "nav-link list-group-item");
    link.setAttribute("href", "#");
    link.textContent = item;
  }
  // main tab
  const main = content.appendChild(document.createElement("main"));
  main.setAttribute("class", "main bg-dark d-flex flex-column justify-content-around align-items-center");

  const hero = main.appendChild(document.createElement("div"));
  hero.setAttribute("class", "hero bg-light  h-25 w-100");

  const sectionTitle = hero.appendChild(document.createElement("h2"));
  sectionTitle.setAttribute("class", "w-100 bg-light")
  sectionTitle.textContent = "Section Title"



  const section = main.appendChild(document.createElement("section"));
  section.setAttribute("class", "section-tab h-50 w-75 bg-light");

  const footer = content.appendChild(document.createElement("footer"));
  footer.setAttribute("class", "footer  h-100 w-100 bg-warning");
}

