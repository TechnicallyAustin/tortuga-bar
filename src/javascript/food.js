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

function displayMenu() {
  const article = document.querySelector("article");

  const foodItems = {
    dom: function(){
        for (let i = 0; i < foodList.length; i++) {
          let mealItem = foodList[i]
          let meal = article.appendChild(document.createElement("div"));
          
            for (let i = 0; i < mealItem[i].length; i++) {
                let attribute = meal[i]
          }
        }
    },
    newObj: function(){
        for (let i = 0; i < foodList.length; i++) {
          let meal = foodList[i];
          
        }
    }
}
}

function foodEvent() {
  const food = document.querySelector(".food");
  food.addEventListener("click", displayMenu());
}

console.log("Food imported")