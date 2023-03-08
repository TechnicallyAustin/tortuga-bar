export function newPage(){
    const content = document.querySelector(".content");

    function header(){
        const header = content.appendChild(document.createElement("header"));


        const navbar = {
            nav: null,
            create: function(){
                const nav = header.appendChild(document.createElement("nav"));
                nav.setAttribute("class", "d-flex justify-content-between align-items-center");
                this.nav = nav;
                return this.nav;
            },
            title: function(){
                const title = this.nav.appendChild(document.createElement("p"));
                title.setAttribute("class", "text-white mb-0");
                title.textContent = "TECH BAR IO"
            },
            links: function(){
                const list = this.nav.appendChild(document.createElement("ul"));
                list.setAttribute("class", "d-flex justify-content-around w-50");
                const links = ["Food", "Drinks", "Specials"];

                for (let link of links) {
                    let item = list.appendChild(document.createElement("li"));
                    let itemLink = item.appendChild(document.createElement("a"));
                    item.setAttribute("class", "");
                    itemLink.setAttribute("class", "");
                    itemLink.textContent = link;
                }
            }
        };
        navbar.create()
        navbar.title()
        navbar.links()
    };

    function main(){
        const mainSelector = content.appendChild(document.createElement("main"));

        const hero = {
            hero: null,
            create: function(){
                const create = mainSelector.appendChild(document.createElement("div"))
                create.setAttribute("class", "hero");
                this.hero = create
                return this.hero
            },
            image: function(){
                const image = this.hero.appendChild(document.createElement("img"));
                image.setAttribute("class", "hero-image")
                image.setAttribute("src", "../src/images/glass.jpeg")
                image.setAttribute("alt", "")
            },
            headline: function(){
                const headline = this.hero.appendChild(document.createElement("h1"));
                headline.setAttribute("class", "");
                headline.textContent = "The search for home ends here, welcome to Tech Bar IO"
            }
        };
        hero.create()
        hero.image()
        hero.headline()

        const main = {
            section: function(){},
            navbar: function(){},
            article: function(){}
        };
        main.section()
        main.navbar()
        main.article()
    };

    function footer(){
        const info = {
            text: function(){},
            credit: function(){}
        }
        info.text()
        info.credit()
    }

    function build(){
        header()
        main()
        footer()
    };
    build()
};
