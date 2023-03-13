export function nav(obj) {
  const article = document.querySelector("article");
  const newCard = article.appendChild(document.createElement("div"));
  newCard.setAttribute("class", "card menu-card bg-dark");




  const cardNav = {
    header: function () {
      const header = newCard.appendChild(document.createElement("div"));
      header.setAttribute("class", "card-header bg-secondary");
      const elements = {
        nav: null,
        createNav: function () {
          const nav = header.appendChild(document.createElement("ul"));
          nav.setAttribute("class", "nav nav-tabs card-header-tabs w-100");
          nav.setAttribute("role", "tablist");
          this.nav = nav;
        },
        items: function () {
          for (let key in obj) {
            let item = this.nav.appendChild(document.createElement("li"));
            item.setAttribute("class", "nav-item w-25");
            item.setAttribute("role", "presentation");

            let link = item.appendChild(document.createElement("a"));
            link.setAttribute(
              "class",
              `${key.toLowerCase()} nav-link active bg-dark text-white`
            );
            link.setAttribute("id", `${key.toLowerCase()}`);
            link.setAttribute("data-bs-toggle", "tab");
            link.setAttribute("href", "#");
            link.setAttribute("aria-controls", "");
            link.textContent = key;
          }
        },
      };
      elements.createNav();
      elements.items();
    },
    body: function () {
      const elements = {
        body: null,
        create: function () {
          const newBody = newCard.appendChild(document.createElement("div"));
          newBody.setAttribute("class", "menu-body card-body");
          this.body = newBody;
        },
        content: function () {
          const content = this.body.appendChild(document.createElement("div"));
          content.setAttribute("class", "tab-content menu-content");

          for (let key in obj){
            console.log(key)
          }

          //const menus = {
          //  beer: function () {},
          //  wine: function () {},
          //  cocktails: function () {},
          //  martinis: function () {},
          //};
          //menus.beer();
          //menus.wine();
          //menus.cocktails();
          //menus.martinis();
        },
      };
      elements.create();
      elements.content();
    },
  };
  cardNav.header();
  cardNav.body();
}
