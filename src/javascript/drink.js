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
    const cardNav = {
        card: function(){
            // div card
        },
        header: function(){
            // div header
        },
        nav: function(){
            // ul
            // ul nav nav-tabs card-header-tabs role="tabList"
                // li nav-item role="preseentation"
                    // a nav-link active
                // li nav-item role="preseentation"
                    // a nav-link active
                // li nav-item role="preseentation"
                    // a nav-link active
                // li nav-item role="preseentation"
                    // a nav-link active
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
