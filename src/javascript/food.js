import {Card, newFoodCards} from './card.js'
import Ramen from '../images/Ramen.jpeg'
import { nav } from './subnav.js';

console.log(Ramen)
class Food {
  constructor(title, info, price) {
    this.title = title;
    this.info = info;
    this.price = price;
  }
}

const foodList = {
  ramen: [
    "Ramen",
    "Tonkatsu Ramen with a boiled egg and chasu",
    "18"
    ],
  pizza: [
    "Pizza",
    "Your choice of Supreme, Combination or Meat-Lovers.",
    "22"
  ],
  burger: [
    "Burger",
    "2 1/4 lb All-American Beef Pattiees, Build your own burger.",
    "16"
  ],
  fries: ["Fries", "French fries, served regular or cajun.", "8", ""],
  sushi: ["Sushi", "Your choice of 6 differnt sushi rolls.", "7", ""],
  salad: [
    "Salad",
    "Cesear Salad with your choice of meat, made to perfection.",
    "12"
  ],
};

const foodTitles = {
  apetizers: "Apetizers" ,
  entrees: "Entrees" ,
  salads: "Salads",
  pasta: "Pasta",
  deserts: "Deserts",
};

export function addFood() {
    const all = []
    for (let key in foodList){
        let title = foodList[key][0];
        let info = foodList[key][1];
        let price = foodList[key][2]
        const meal = new Food(title,info,price)
        all.push(meal)
    }
    return all
};


export function foodEvent() {
  const container = document.querySelector(".food-container");
  const article = document.querySelector("article");
  console.log(container)
  container.addEventListener("click", (event)=> {
   // if (container.classList.contains("border-4")){
   //     container.classList.remove("border-4", "border-warning")
   // } else {
    article.innerHTML = ""

        event.target.classList.add("border-warning")
        nav(foodTitles)
        newFoodCards()
   // }
console.log(event.target)
  });
};


console.log("Food imported")
