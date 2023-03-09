export function newPage() {
  const content = document.querySelector(".content");

  function header() {
    const header = content.appendChild(document.createElement("header"));
    header.setAttribute(
      "class",
      "bg-black bg-opacity-50 w-100 d-flex justify-content-between align-items-center position-sticky top-0"
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
          "w-100 d-flex justify-content-around align-items-center mb-0 ms-3 w-50  list-unstyled"
        );
        const links = ["Food", "Drinks", "Specials"];

        for (let link of links) {
          let item = list.appendChild(document.createElement("li"));
          let itemLink = item.appendChild(document.createElement("a"));
          item.setAttribute("class", "nav-item");
          itemLink.setAttribute("class", "nav-link text-white");
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

        },
        headline: function () {
            const container = this.hero.appendChild(document.createElement("div"));
            container.setAttribute("class", "headline-container position-relative top-0 ms-3 w-50 bg-black bg-opacity-50")
            const headline = container.appendChild(document.createElement("h1"));
            headline.setAttribute("class","text-white pt-4 pb-2");
            headline.textContent = "The search for home ends here.";
        },
        button: function(){
            const button = this.hero.appendChild(document.createElement("button"));
            button.setAttribute("class","btn btn-primary ms-3")
            button.setAttribute("value","Reservations")
            button.setAttribute("id", "reservations");
            button.textContent = "Make a reservation now!"
        }
      };
      hero.create();
      hero.headline();
      hero.button();
    }

  function main() {
    const mainSelector = content.appendChild(document.createElement("main"));
    mainSelector.setAttribute("class", "main")

    const main = {
        tabs: function(){
            const menuTabs = mainSelector.appendChild(document.createElement("div"));
            menuTabs.setAttribute("class", "menu-nav d-flex flex-column justify-content-around align-items-center h-100 bg-black bg-opacity-50");
            const titles = ["Food", "Drinks", "Specials"]

            for (let title of titles){
                let container = menuTabs.appendChild(document.createElement("div"));
                container.setAttribute("class", `${title.toLowerCase()} menu-tab d-flex align-items-center justify-content-center h-25 w-100`)
                let item = container.appendChild(document.createElement("p"));
                item.setAttribute("class", "text-white nav-link mb-0 fs-5")
                item.textContent = title
            }
        },
        section: null,
        createSection: function(){
            const section = mainSelector.appendChild(document.createElement("section"))
            section.setAttribute("class", "section d-flex justify-content-center w-100 h-100")
            this.section = section
        },
        article: function () {
            const article = this.section.appendChild(document.createElement("article"));
            article.setAttribute("class", "article bg-dark w-100 h-100 overflow-y-scroll")
        },
    };

    main.tabs()
    main.createSection();
    main.article();
  }

  function footer() {
    const footer = content.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer d-flex justify-content-around align-items-center bg-black bg-opacity-50 w-100")

    const info = {
        text: function () {
            const container = footer.appendChild(document.createElement("div"))
            container.setAttribute("class", "footer-container d-flex justify-content-around align-items-center w-100")
            const text = container.appendChild(document.createElement("p"));
            text.setAttribute("class", "footer-text text-white mb-0")
            text.textContent = "Designed by Austin Johnson"
      },    
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
