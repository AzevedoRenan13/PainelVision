class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do componente - exemplo <h1>Renan</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent =  this.getAttribute('titulo'); // this.getAttribute >> props / HTML linha 28

        //estilizar o componente
        const style = document.createElement('style');
        style.textContent = `
        h1{
            color: red;            
        }
        `;

        //enviar para a shadow
     shadow.appendChild(componentRoot);
     shadow.appendChild(style);


    }
}

customElements.define('titulo-dinamico', TituloDinamico );