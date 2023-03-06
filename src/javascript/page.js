//creates the API for the page

export function newPage() {
  const content = document.body.appendChild(document.createElement("div"));
  content.setAttribute("class", "content bg-dark");

  // Header
  const header = content.appendChild(document.createElement("header"));
  header.setAttribute("class", "header col-12");

  // nav
  const nav = header.appendChild(document.createElement("nav"));
  nav.setAttribute(
    "class",
    "nav col-12  position-sticky top-0 bg-transparent d-flex justify-content-around align-items-center"
  );

  // nav title
  const title = nav.appendChild(document.createElement("h1"));
  title.setAttribute("class", "title nav-item text-white col-5 ");
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
  // main
  const main = content.appendChild(document.createElement("main"));
  main.setAttribute(
    "class",
    "main bg-dark d-flex flex-column justify-content-around align-items-center"
  );
  //hero
  const hero = main.appendChild(document.createElement("div"));
  hero.setAttribute("class", "hero carousel carousel-dark bg-dark  h-50 w-100");

  const heroImg = hero.appendChild(document.createElement("img"));
  heroImg.setAttribute("class","hero-image img-fluid z-index-1")
  heroImg.setAttribute("src", "../src/images/bar.jpg");

  const caption = hero.appendChild(document.createElement("h2"));
  caption.setAttribute("class", "carousel-caption text-white bg-dark bg-opacity-50  position-absolute h-25 top-0 bg- fs-1 m-0 p-0 ");
  caption.textContent = "Technically the Best Bar Ever.";

  // tabs
  const section = main.appendChild(document.createElement("section"));
  section.setAttribute("class", "section-tab h-75 w-100 bg-light");

  const footer = content.appendChild(document.createElement("footer"));
  footer.setAttribute("class", "footer  h-100 w-100 bg-warning");
}
