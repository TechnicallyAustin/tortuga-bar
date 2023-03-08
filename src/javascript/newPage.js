export function newPage(){
    const content = document.querySelector(".content");

    function header(){
        const header = content.appendChild(document.createElement("header"));

        const navbar = {
            nav: null,
            create: function(){
                const nav = content.appendChild(document.createElement("nav"));
                nav.setAttribute("class", "");
                this.nav = nav;
                return this.nav;
            },
            title: function(){
                const title = this.nav.appendChild(document.createElement("p"));
                title.setAttribute("class", "");
            },
            links: function(){
                const list = this.nav.appendChild(document.createElement("ul"));
                list.setAttribute("class", "");
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
        const hero = {
            image: function(){},
            headline: function(){}
        };
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
