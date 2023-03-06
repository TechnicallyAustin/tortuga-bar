export const page = {
  content: function(){
    const content = document.querySelector(".content")
    this.content = content
  },
  header: function(){
    const header = content.appendChild(document.createElement("header"));
    header.setAttribute("class", "header bg-warning")
  },
  navbar: function(){
    const headerSelector = document.querySelector(".header")
    const navbar = headerSelector.appendChild(document.createElement("navbar"));
    navbar.setAttribute("class", "navbar");
  },
  navItems: function(){
    const nav = document.querySelector(".navbar");

    function title(){
      const container = nav.appendChild(document.createElement("div"));
      const title = container.appendChild(document.createElement("p"));
      title.setAttribute("class", "nav-title");
      title.textContent = "Tech Bar"
    };
    title()

    function list(){
      const list = nav.appendChild(document.createElement("ul"))
      list.setAttribute("class", "");

      function listItems(){
        const links = ["About", "Menu", "Drinks"]
        for (let link of links){
          let item = list.appendChild(document.createElement("li"))
          item.setAttribute("class","");
          item.textContent = link
        }
      }; listItems()
    }; list()
  },
  main: function(){
    const main = content.appendChild(document.createElement("main"));
    main.setAttribute("class", "main bg-dark")
    
    const elements = {
      hero: function(){
        const hero = main.appendChild(document.createElement("div"));
        hero.setAttribute("class", "");
      },
      section: function(){
        const section = main.appendChild(document.createElement("section"));
        section.setAttribute("class","");
      }
    }

  },
  footer: function(){
    const footer = content.appendChild(document.createElement("footer"));
    footer.setAttribute("class", "footer bg-warning");
  },
  build: function(){
    this.header()
    this.navbar()
    this.navItems()
    this.main()
    this.footer()
  }
}