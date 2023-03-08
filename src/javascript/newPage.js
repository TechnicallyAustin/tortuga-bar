export function newPage() {
  const content = document.querySelector(".content");

  function header() {
    const header = content.appendChild(document.createElement("header"));
    header.setAttribute(
      "class",
      "bg-black bg-opacity-50 w-100 d-flex justify-content-between align-items-center"
    );

    const title = () => {
      const title = header.appendChild(document.createElement("p"));
      title.setAttribute("class", "w-25 ms-3 text-white mb-0 fs-3 ");
      title.textContent = "TECH BAR IO";
    };

    const navbar = {
      nav: null,
      create: function () {
        const nav = header.appendChild(document.createElement("navbar"));
        nav.setAttribute(
          "class",
          "w-50 d-flex justify-content-around align-items-center"
        );
        this.nav = nav;
        return this.nav;
      },
      links: function () {
        const list = this.nav.appendChild(document.createElement("ul"));
        list.setAttribute(
          "class",
          "w-100 d-flex justify-content-around align-items-center mb-0 ms-3 w-50 fs-4 "
        );
        const links = ["Food", "Drinks", "Specials"];

        for (let link of links) {
          let item = list.appendChild(document.createElement("li"));
          let itemLink = item.appendChild(document.createElement("a"));
          item.setAttribute("class", "");
          itemLink.setAttribute("class", "text-white");
          itemLink.textContent = link;
        }
      },
    };
    title();

    navbar.create();
    navbar.links();
  }

    function hero() {
      const hero = {
            hero: null,
            create: function () {const create = content.appendChild(document.createElement("div"));
            create.setAttribute("class", "hero");
            this.hero = create;
            return this.hero;
        },
        headline: function () {
            const container = this.hero.appendChild(document.createElement("div"));
            container.setAttribute("class", "headline-container position-relative top-0 ms-3 w-50 bg-black bg-opacity-50")
            const headline = container.appendChild(document.createElement("h1"));
            headline.setAttribute("class","text-white pt-4");
            headline.textContent = "The search for home ends here.";
        },
      };
      hero.create();
      hero.headline();
    }

  function main() {
    const mainSelector = content.appendChild(document.createElement("main"));
    mainSelector.setAttribute("class", "main")

    const main = {
        tabs: function(){
            const menuTabs = mainSelector.appendChild(document.createElement("div"));
            menuTabs.setAttribute("class", "tab-nav w-100 bg-black bg-opacity-50");
            const title = ["Food", "Drinks", "Specials"]
        },
        section: function () {
            const section = mainSelector.appendChild(document.createElement("section"))
            section.setAttribute("class", "section")
        },
        navbar: function () {},
        article: function () {},
    };

    main.tabs()
    main.section();
    main.navbar();
    main.article();
  }

  function footer() {
    const info = {
      text: function () {},
      credit: function () {},
    };
    info.text();
    info.credit();
  }

  function build() {
    header();
    hero();
    main();
    footer();
  }
  build();
}
