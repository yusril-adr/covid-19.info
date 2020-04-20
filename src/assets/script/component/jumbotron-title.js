import coronaImg from "../../img/corona.png";

class JumbotronTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .jumbotron {
                display: flex;
                text-transform: uppercase;
                justify-content: center;
                align-items: center;
                padding: 10px;
            }
            
            .jumbotron > img {
                height: 70px;
                margin-right: 15px;
            }
            
            .jumbotron > h1 { 
                font-size: 28px;
            }
        </style>
        <div class="jumbotron animated slideInDown">
            <img src="${coronaImg}" alt="Corona">
            <h1>Covid-19.Info</h1>
        </div>
        `
    }
}

customElements.define("jumbotron-title", JumbotronTitle);