export const page = {
  content: function () {
    const content = document.querySelector(".content");
    this.content = content;
  },
  header: function () {
    const header = content.appendChild(document.createElement("header"));
    header.setAttribute("class", "header position-sticky top-0 bg-opacity-50");
  },
  navbar: function () {
    const headerSelector = document.querySelector(".header");
    const nav = headerSelector.appendChild(document.createElement("navbar"));
    nav.setAttribute("class", "navbar d-flex justify-content-between align-items-center");

    const items = {
      title: function () {
        const container = nav.appendChild(document.createElement("div"));
        const title = container.appendChild(document.createElement("p"));
        title.setAttribute("class", "nav-title fs-2 mb-0 ms-3");
        title.textContent = "Tech Bar IO";
      },
      list: function () {
        const list = nav.appendChild(document.createElement("ul"));
        list.setAttribute("class", "nav");

        const links = ["About", "Menu", "Drinks"];
        for (let link of links) {
          let item = list.appendChild(document.createElement("li"));
          let itemLink = item.appendChild(document.createElement("a"))
          item.setAttribute("class", "nav item");
          itemLink.setAttribute("class", "nav-link")
          itemLink.textContent = link;
        }
      },
    };
    items.title();
    items.list();
  },
  main: function () {
    const main = content.appendChild(document.createElement("main"));
    main.setAttribute("class", "main bg-dark");

    const elements = {
      hero: function () {
        const hero = main.appendChild(document.createElement("div"));
        hero.setAttribute("class", "");

        const heroItems = {
          img: function () {
            const img = hero.appendChild(document.createElement("img"));
            img.setAttribute("class", "img-fluid");
            img.setAttribute("src", "../src/images/bar-2.jpg");
            img.setAttribute("alt", "");
          },
          title: function () {
            const title = hero.appendChild(document.createElement("h1"));
            title.setAttribute("class", "");
            title.textContent = "Tehcnically a Bar";
          },
        };
        heroItems.img();
        heroItems.title();
      },
      section: function () {
        const section = main.appendChild(document.createElement("section"));
        section.setAttribute("class", "");
      },
    };
    elements.hero();
    elements.section();
  },
  footer: function () {
    const footer = content.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer bg-warning");
  },
  build: function () {
    this.header();
    this.navbar();
    this.main();
    this.footer();
  },
};
