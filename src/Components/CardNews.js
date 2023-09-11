class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card"); //atribuindo ao component Root a classe card

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left"); //Atribuindo classe.

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous"); // this.getAttribute >> props


        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //                           lado esquerdo
        // <------------------------------------------------------------->
        //                           lado direito

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right"); //Atribuindo classe.

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/Default.png";
        newsImage.alt = "Foto da notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
            .card{
                width: 100%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card-left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }

            .card-left > span {
                font-weight: bold;
            }


            .card-left > p {
                color: gray;
            }

            .card-right > img {
                width: 100%;
            }

        `;
        return style;

    }
}

customElements.define("card-news", Cardnews); //Sempre nomes com traços