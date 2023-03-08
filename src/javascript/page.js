export const page = {
  content: function () {
    const content = document.querySelector(".content");
    this.content = content;
  },
  header: function () {
    const header = content.appendChild(document.createElement("header"));
    header.setAttribute("class", "header  text-white bg-dark");
  },
  navbar: function () {
    const headerSelector = document.querySelector(".header");
    const nav = headerSelector.appendChild(document.createElement("navbar"));
    nav.setAttribute(
      "class",
      "navbar d-flex justify-content-between align-items-center fixed-top"
    );

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
          let itemLink = item.appendChild(document.createElement("a"));
          item.setAttribute("class", "nav item");
          itemLink.setAttribute("class", "nav-link text-white");
          itemLink.textContent = link;
        }
      },
    };
    items.title();
    items.list();
  },
  main: function () {
    const main = content.appendChild(document.createElement("main"));
    main.setAttribute(
      "class",
      "main h-100 bg-secondary d-flex flex-column justify-content-start align-items-center"
    );

    const elements = {
      hero: function () {
        const hero = main.appendChild(document.createElement("div"));
        hero.setAttribute("class", "hero carousel");

        const heroItems = {
          img: function () {
            const img = hero.appendChild(document.createElement("img"));
            img.setAttribute("class", "img-fluid");
            img.setAttribute("src", "../src/images/bar.jpg");
            img.setAttribute("alt", "tech bar io image");
          },
          title: function () {
            const container = hero.appendChild(document.createElement("div"));
            const title = container.appendChild(document.createElement("h1"));
            container.setAttribute(
              "class",
              "text-white bg-dark carousel-caption d-flex justify-content-start align-items-center position-absolute top-0 start-0 h-25 bg-opacity-50 w-100"
            );
            title.setAttribute(
              "class",
              "fs-1 fw-bold ms-3 text-decoration-underline"
            );
            title.textContent = "Technically a Bar";
          },
        };
        heroItems.img();
        heroItems.title();
      },
      section: function () {
        const section = main.appendChild(document.createElement("section"));
        section.setAttribute(
          "class",
          "section carousel tab default bg-dark w-100 vh-100"
        );

        const container = section.appendChild(document.createElement("div"));
        const title = container.appendChild(document.createElement("h2"));
        container.setAttribute(
          "class",
          "w-100 position-relative bg-dark bg-opacity-50 top-0 bottom-25 start-0 d-flex justify-content-center align-items-center"
        );
        title.setAttribute("class", "fs-2 mb-0 text-white text-decoration-underline");
        title.textContent = "Menu";
      },
      article: function () {
        const section = document.querySelector(".section");

        const tabContainer = section.appendChild(document.createElement("div"));
        tabContainer.setAttribute("class", "tab-container bg-secondary h-100 w-100 me-2");

        function tabs() {
          const titles = ["Food", "Drinks", "Specials"];
          const tabs = tabContainer.appendChild(document.createElement("nav"));
          tabs.setAttribute("class", "nav flex-column h-100");
          for (let title of titles) {
            let link = tabs.appendChild(document.createElement("a"));
            link.setAttribute("class", `nav-link ${title.toLowerCase()} text-white fs-4 bg-secondary`);
            link.setAttribute("href", `#food`);
            link.textContent = title;
          }
        }
        tabs();

        const article = tabContainer.appendChild(
          document.createElement("article")
        );
        article.setAttribute("class", " h-100 w-100 bg-secondary");
      },
    };
    elements.hero();
    elements.section();
    elements.article();
  },
  footer: function () {
    const footer = content.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer bg-dark w-100  d-flex position-fixed bottom-0 justify-content-center align-items-center");

    const text = footer.appendChild(document.createElement("p"));
    text.setAttribute("class", " text-white m-0 fs-5")
    text.textContent = "Footer Text"
  },
  build: function () {
    this.header();
    this.navbar();
    this.main();
    this.footer();
  },
};
