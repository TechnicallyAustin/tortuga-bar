import { addFood } from "./food.js";
import { addDrinks } from "./drink.js";

export class Card{
    constructor(title,info,price){
        this.title = title
        this.info = info
        this. price = price
    }
};

// creates a single card
function createCard(menuItem){
    const article = document.querySelector("article");
    const card = article.appendChild(document.createElement("div"));
    card.setAttribute("class", "card h-50 w-75 bg-light border-warning border-4")
   const elements = {
       img: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-header")
           container.textContent = menuItem.title
           //const image = container.appendChild(document.createElement("img"));
           //image.setAttribute("class","menu-image")
           //image.setAttribute("src",`${menuItem.image}`)
           //image.setAttribute("alt",`${menuItem.title} image`)
       },
       body: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-body h-50");
           container.textContent = menuItem.info
       },
       footer: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-footer h-25");
           container.textContent = menuItem.price
       }
   }
   elements.img()
   elements.body()
   elements.footer()

    //const makeCard = {
    //    card: null,
    //    create: function(){
    //        const card = article.appendChild(document.createElement("div"));
    //        card.setAttribute("class", "card col")
//
    //        const div = card.appendChild(document.createElement("div"));
    //        div.setAttribute("class", "row g-0");
    //    }, // creates the card div and card sub div
    //    image: function(){
    //        const div = article.appendChild(document.createElement("div"));
    //        card.setAttribute("class", "card col")
//
    //        const div = card.appendChild(document.createElement("div"));
    //        div.setAttribute("class", "row g-0");
    //    }, // creates img div and img
    //    body: function(){}, // creates div and card-body div
    //    elements: function(){}, // creates card-title h5 and card-text p
    //}


};

// creates Card objects from Food Objects
export function newFoodCards(){
    const meals = addFood();
    for (let meal of meals) {
        let item = new Card(meal.title, meal.info, meal.price);
        createCard(item)
    }

}

export function newDrinkCards() {
  const drinks = addDrinks();
  for (let drink of drinks) {
    let item = new Card(drink.title, drink.info, drink.price);
    createCard(item);
  }
}