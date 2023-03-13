import { newDrinkCards } from "./card";

class Drink {
  constructor(title, info, price) {
    this.title = title;
    this.info = info;
    this.price = price;
  }
}

// contains an drink information
const drinkList = {
  Beer: [
    "Beer Title",
    "A little bit of a longer description of the beer",
    "beer price",
  ],
  Wine: [
    "Wine Title",
    "A little bit of a longer description of the wine",
    "wine price",
  ],
  Cocktails: [
    "Cocktails Title",
    "A little bit of a longer description of the Cocktail",
    "Cocktail price",
  ],
  Martinis: [
    "Martinis Title",
    "A little bit of a longer description of the Martini",
    "Martini price",
  ],
};

// creates an array of all Drink objects
export function addDrinks() {
  const all = [];
  for (let key in drinkList) {
    let title = drinkList[key][0];
    let info = drinkList[key][1];
    let price = drinkList[key][2];
    const drink = new Drink(title, info, price);
    all.push(drink);
  }
  return all;
}

// creates a sub menu to Navigate different kinds of drinks
function nav() {
  const article = document.querySelector("article");
  const newCard = article.appendChild(document.createElement("div"));
  newCard.setAttribute("class", "card drink-card-menu bg-dark");
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
          for (let key in drinkList) {
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
          newBody.setAttribute("class", "card-body");
          this.body = newBody;
        },
        content: function () {
          const content = this.body.appendChild(document.createElement("div"));
          content.setAttribute("class", "tab-content");

          const menus = {
            beer: function () {},
            wine: function () {},
            cocktails: function () {},
            martinis: function () {},
          };
          menus.beer();
          menus.wine();
          menus.cocktails();
          menus.martinis();
        },
      };
      elements.create();
      elements.content();
    },
  };
  cardNav.header();
  cardNav.body();
}

// contains event listeners for each drink menu within the nav
export function selectDrinkType() {
  const container = document.querySelector(".drinks-container");
  const article = document.querySelector("article");
  container.addEventListener("click", () => {
         article.innerHTML = "";
         nav();
         console.log(container.classList)
         container.classList.add("border-4", "border-warning")
         console.log(container.classList);
         displayDrinkMenu();

  });
}

function displayDrinkMenu() {
  // drink menu
  const drinkTypes = {
    beer: {
      selector: document.querySelector(".beer"),
    },
    wine: {
      selector: document.querySelector(".wine"),
    },
    cocktails: {
      selector: document.querySelector(".cocktails"),
    },
    martinis: {
      selector: document.querySelector(".martinis"),
    },
  };

  for (let drink in drinkTypes) {
    const menu = drinkTypes[drink].selector;
    const article = document.querySelector("article");
    console.log(menu)
    menu.addEventListener("click", () => {
      console.log(`${menu} clicked`)

      article.innerHTML = "";
      nav();
      newDrinkCards();
      selectDrinkType()
    });
  }
}
