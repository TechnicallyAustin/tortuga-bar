import { addFood } from "./food.js";

export class Card{
    constructor(title,info,price, image){
        this.title = title
        this.info = info
        this. price = price
        this.image = image
    }
};

// creates a single card
function createCard(menuItem){
    const article = document.querySelector("article");
    const card = article.appendChild(document.createElement("div"));
    card.setAttribute("class", "card col-3")
   const elements = {
       img: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-header")
           container.textContent = menuItem.title
           const image = container.appendChild(document.createElement("img"));
           image.setAttribute("class","menu-image")
           image.setAttribute("src",`${menuItem.image}`)
           image.setAttribute("alt",`${menuItem.title} image`)
       },
       body: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-body h-25");
           container.textContent = menuItem.info
       },
       footer: function(){
           const container = card.appendChild(document.createElement("div"));
           container.setAttribute("class", "card-footer");
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