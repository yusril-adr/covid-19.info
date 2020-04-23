class NotFound extends HTMLElement {
    set message(message) {
        this._message = message;
        this.renderIn();
    }

    set clickEvent(event) {
        this._clickEvent = event; 
    }

    renderIn() {
        this.innerHTML = `
        <style>
            #not-found {
                display: flex;
                align-items: center;
                justify-content: center;
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: rgba(0,0,0,.7);
            }
            
            .errorBox {
                width: 250px;
                height: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: white;
                border-radius: 12px;
                animation-duration: .3s;
            }

            #notFoundButton {
                width: 50px;
                margin-top: 10px;
                background-color: rgb(20, 204, 143);
                color: white;
                font-size: 18px;
                border: 0;
                border-radius: 4px;
                padding: 5px;
                transition: transform .3s;
            }
            
            #notFoundButton:hover {
                background-color: salmon;
                transform: scale(1.1);
            }
        </style>
        <div id="not-found">
            <div class="animated zoomIn errorBox">
                <p>${this._message}</p>
                <button id="notFoundButton">OK</button>
            </div>
        </div>
        `

        document.querySelector("#notFoundButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("not-found", NotFound);