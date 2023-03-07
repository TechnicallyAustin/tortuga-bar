import {createCards} from './card.js'

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
        "Tonkatsu Ramen with a boiled egg and chasu, served with traditional toppings.",
        "18",
    ],
    pizza: [
        "Pizza",
        "Your choice of our speciality pizza's. Supreme, Combination or Meat-Lovers.",
        "22",
    ],
    burger: [
        "Burger",
        "2 1/4 lb All-American Beef Pattiees, Build your own burger.",
        "16",
    ],
    fries: [
        "Fries",
        "French fries, served regular or cajun.",
        "8"
    ],
    sushi: [
        "Sushi",
        "Your choice of 6 differnt sushi rolls.",
        "7"
    ],
    salad: [
        "Salad",
        "Cesear Salad with your choice of meat, made to perfection.",
        "12"
    ]
};

export function addFood() {
    for (let key in foodList){
        let title = foodList[key][0];
        let info = foodList[key][1];
        let price = foodList[key][2];
        const meal = new Food(title,info,price)
        console.log(meal)
    }
};

function foodEvent() {
  const food = document.querySelector(".food");
  food.addEventListener("click", ()=> {display()});
}

console.log("Food imported")
