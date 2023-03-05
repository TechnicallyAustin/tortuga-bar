// creates the API for the pag

//export function newPage() {
//  const content = document.body.appendChild(document.createElement("div"));
//  content.setAttribute("class", "content w-100 h-100 bg-dark");
//
//  // Header
//  const header = content.appendChild(document.createElement("header"));
//  header.setAttribute("class", "header col-12 bg-info");
//
//  // nav
//  const nav = header.appendChild(document.createElement("nav"));
//  nav.setAttribute(
//    "class",
//    "nav col-12 bg-warning d-flex justify-content-around align-items-center"
//  );
//
//  // nav title
//  const title = nav.appendChild(document.createElement("h1"));
//  title.setAttribute("class", "title nav-item col-5 ");
//  title.textContent = "Technically Bar";
//
//  // nav list
//  const list = nav.appendChild(document.createElement("ul"));
//  list.setAttribute(
//    "class",
//    "navbar col-6 list-group list-group-horizontal list-unstyled"
//  );
//
//  // nav list items
//  const items = ["item 1", "item 2", "item 3"];
//  for (let item of items) {
//    let listItem = list.appendChild(document.createElement("li"));
//    listItem.setAttribute("class", "nav-item");
//
//    let link = listItem.appendChild(document.createElement("a"));
//    link.setAttribute("class", "nav-link list-group-item");
//    link.setAttribute("href", "#");
//    link.textContent = item;
//  }
//  // main tab
//  const main = content.appendChild(document.createElement("main"));
//  main.setAttribute("class", "main");
//
//  const section = main.appendChild(document.createElement("section"));
//  section.setAttribute("class", "section-tab");
//
//  const footer = content.appendChild(document.createElement("footer"));
//  footer.setAttribute("class", "footer");
//}

export function createPage() {
  const newPage = {
    header: null,
    createHeader: function () {
    const content = document.body.appendChild(document.createElement("div"));
    const newHeader = content.appendChild(document.createElement("header"));
    newHeader.setAttribute("class", "header col-12 bg-info");
    this.header = newHeader;
    },
    navbar: {
        nav: null,
        createNav: function () {
            const navi = this.header.appendChild(document.createElement("nav"));
            navi.setAttribute("class","nav col-12 bg-warning d-flex justify-content-around align-items-center");
            this.nav = navi;
        },
        list: null,
        createList: function () {
          const list = this.nav.appendChild(document.createElement("ul"));
          list.setAttribute("class","navbar col-6 list-group list-group-horizontal list-unstyled");
          this.list = list 
        },
        links: function () {
          const items = ["item 1", "item 2", "item 3"];
          for (let item of items) {
            let listItem = this.list.appendChild(document.createElement("li"));
            listItem.setAttribute("class", "nav-item");

            let link = listItem.appendChild(document.createElement("a"));
            link.setAttribute("class", "nav-link list-group-item");
            link.setAttribute("href", "#");
            link.textContent = item;
          }
        },
    },
    main: function () {},
    section: function () {},
    footer: function () {},
    build: function () {
      newPage.createHeader();
      newPage.navbar.createNav();
      newPage.navbar.createList();
      newPage.navbar.links();
    },
  };
  newPage.build()
}
