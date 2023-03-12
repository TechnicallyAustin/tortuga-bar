import { newDrinkCards } from "./card"

class Drink{
    constructor(title, info, price){
        this.title = title
        this.info = info
        this.price = price 
    }
}

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
    const newCard = article.appendChild(document.createElement("div"));
    newCard.setAttribute("class", "card drink-card-menu bg-dark");
    const cardNav = {
        header: function(){
            const header = newCard.appendChild(document.createElement("div"))
            header.setAttribute("class", "card-header bg-secondary");
            const elements = {
                nav: null,
                createNav: function(){
                    const nav = header.appendChild(document.createElement("ul"));
                    nav.setAttribute("class", "nav nav-tabs card-header-tabs w-100");
                    nav.setAttribute("role", "tablist")
                    this.nav = nav;
                },
                items: function(){
                    for (let key in drinkList){
                        let item = this.nav.appendChild(document.createElement("li"));
                        item.setAttribute("class","nav-item w-25");
                        item.setAttribute("role", "presentation")

                        let link = item.appendChild(document.createElement("a"))
                        link.setAttribute("class", `${key.toLowerCase()} nav-link active bg-dark border-warning text-white`)
                        link.setAttribute("id", `${key.toLowerCase()}`)
                        link.setAttribute("data-bs-toggle", "tab");
                        link.setAttribute("href", "#")
                        link.setAttribute("aria-controls", "")
                        link.textContent = key 
                    };
                }
            }; 
            elements.createNav()
            elements.items()

        },
        body: function(){
            const elements = {
                body: null,
                create: function(){
                    const newBody = newCard.appendChild(document.createElement("div"))
                    newBody.setAttribute("class", "card-body");
                    this.body = newBody
                },
                content: function(){
                    const content = this.body.appendChild(document.createElement("div"));
                    content.setAttribute("class", "tab-content");

                    const menus = {
                        beer: function(){},
                        wine: function(){},
                        cocktails: function(){},
                        martinis: function(){}
                    };
                    menus.beer()
                    menus.wine()
                    menus.cocktails()
                    menus.martinis()
                },
            }
            elements.create()
            elements.content()
        } 
    };
    cardNav.header()
    cardNav.body()
}

export function drinkEvent() {
  const container = document.querySelector(".drinks-container");
  const article = document.querySelector("article");
  container.addEventListener("click", (event)=> {
   // if (container.classList.contains("border-4")){
   //     container.classList.remove("border-4", "border-warning")
   // } else {
        //event.target.classList.add("border-4", "border-warning")
        article.innerHTML = ""
        nav()
        selectMenu()
   // }
console.log(event.target)
  });
};

function selectMenu(){
    const drinks = {
        beer: document.querySelector(".beer"),
        wine: document.querySelector(".wine"),
        cocktails: document.querySelector(".cocktails"),
        martinis: document.querySelector(".martinis")
    }



    for (let key in drinks){
        drinks[key].addEventListener("click", () =>{
            console.log("clicked")
        })
    }


}
