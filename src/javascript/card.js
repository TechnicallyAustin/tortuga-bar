class Card{
    constructor(title,info,price){
        this.title = title
        this.info = info
        this. price = price
    }
}

function createCard(title,info,price){
    const article = document.querySelector("article");
    const card = article.appendChild(document.createElement("div"));
    const elements = {
        header: function(){
            const container = card.appendChild(document.createElement("div"));
            container.setAttribute("class", "card-header")
        },
        body: function(){
            const container = card.appendChild(document.createElement("div"));
            container.setAttribute("class", "card-body");
        },
        footer: function(){
            const container = card.appendChild(document.createElement("div"));
            container.setAttribute("class", "card-footer");
        }
    }
    elements.header()
    elements.body()
    elements.footer()
}