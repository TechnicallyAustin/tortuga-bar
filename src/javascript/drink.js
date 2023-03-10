import { newDrinkCards } from "./card"

class Drink{
    constructor(title, info, price){
        this.title = title
        this.info = info
        this.price = price 
    }
}

const drinkList = {
  beer: [
    "Beer Title",
    "A little bit of a longer description of the beer",
    "beer price",
  ],
  wine: [
    "Wine Title",
    "A little bit of a longer description of the wine",
    "wine price",
  ],
  cocktails: [
    "Cocktails Title",
    "A little bit of a longer description of the Cocktail",
    "Cocktail price",
  ],
  martinis: [
    "Martinis Title",
    "A little bit of a longer description of the Martini",
    "Martini price",
  ],
};

export function addDrinks() {
    const all = []
    for (let key in drinkList){
        let title = drinkList[key][0];
        let info = drinkList[key][1];
        let price = drinkList[key][2]
        const drink = new Drink(title,info,price)
        all.push(drink)
    }
    return all
};

export function nav(){
    const article = document.querySelector("article")
    const cardNav = {
        card: null,
        create: function(){
            const newCard = article.appendChild(document.createElement("div"));
            newCard.setAttribute("class", "card")
            this.card = newCard
        },
        header: function(){
            const header = card.appendChild(document.createElement("div"))
            header.setAttribute("class", "card-header");
            const elements = {
                nav: null,
                createNav: function(){
                    const nav = header.appendChild(document.createElement("ul"));
                    nav.setAttribute("class", "nav nav-tabs card-header-tabs");
                    nav.setAttribute("role", "tablist")
                    this.nav = nav;
                },
                items: function(){
                    for (let key in drinkList){
                        let item = nav.appendChild(document.createElement("li"));
                        item.setAttribute("class","nav-item");
                        item.setAttribute("role", "presentation")

                        let link = item.appendChild(document.createElement("a"))
                        link.setAttribute("class", "nav-link active");
                        link.setAttribute("id", "")
                        link.setAttribute("data-bs-toggle", "tab");
                        link.setAttribute("href", "#")
                        link.setAttribute("aria-controls", "")
                    };
                }
            }; 
            elements.createNav()
            elements.items()

        },
        body: function(){
            // div card-body
                // div tab-content
                    // div tab-pane role="tabpanel"
        } 
    }
}

export function drinkEvent() {
  const container = document.querySelector(".drinks-container");
  const article = document.querySelector("article");
  console.log(container)
  container.addEventListener("click", (event)=> {
   // if (container.classList.contains("border-4")){
   //     container.classList.remove("border-4", "border-warning")
   // } else {
        event.target.classList.add("border-4", "border-warning")
        newDrinkCards()
   // }
console.log(event.target)
  });
};
