import {Card, newFoodCards} from './card.js'
import Ramen from '../images/Ramen.jpeg'
console.log(Ramen)
class Food {
  constructor(title, info, price,image) {
    this.title = title;
    this.info = info;
    this.price = price;
    this.image = image
  }
}

const foodList = {
  ramen: [
    "Ramen",
    "Tonkatsu Ramen with a boiled egg and chasu, served with traditional toppings.",
    "18",
    `${Ramen}`
    ],
  pizza: [
    "Pizza",
    "Your choice of our speciality pizza's. Supreme, Combination or Meat-Lovers.",
    "22",
    "./src/images/pizza.jpeg",
  ],
  burger: [
    "Burger",
    "2 1/4 lb All-American Beef Pattiees, Build your own burger.",
    "16",
    "",
  ],
  fries: ["Fries", "French fries, served regular or cajun.", "8", ""],
  sushi: ["Sushi", "Your choice of 6 differnt sushi rolls.", "7", ""],
  salad: [
    "Salad",
    "Cesear Salad with your choice of meat, made to perfection.",
    "12",
    "",
  ],
};

export function addFood() {
    const all = []
    for (let key in foodList){
        let title = foodList[key][0];
        let info = foodList[key][1];
        let price = foodList[key][2];
        let image = foodList[key][3];
        const meal = new Food(title,info,price,image)
        all.push(meal)
    }
    return all
};

export function foodEvent() {
  const food = document.querySelector(".food-container");
  console.log(food)
  food.addEventListener("click", ()=> {
    console.log("clicked")
    newFoodCards()
  });
};


console.log("Food imported")
