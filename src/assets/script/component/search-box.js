class SearchBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get value() {
        return document.querySelector("#search").value;
    }

    set clickEvent(event) {
        this._clickEvent = event;
        document.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }

    render() {
        this.innerHTML = `
        <style>
            .search-box {
                margin: auto;
                display: flex;
                justify-content: space-around;
            }
            
            #search {
                border: 0;
                border-bottom: 1px solid rgb(20, 204, 143);
                background: transparent;
                font-size: 14px;
                width: 75%;
            }
            
            #searchButton {
                background-color: rgb(20, 204, 143);
                width: 20%;
                padding: 5px;
                margin-left: 5px;
                font-size: 22px;
                color: white;
                border: 0;
                border-radius: 8px;
                transition: transform .3s;
            }
            
            #searchButton:hover {
                background-color: salmon;
                transform: scale(1.2);
            }

            @media screen and (max-width: 1000px) {
                .search-box {
                    width: 100%;
                }
            
                #search {
                    width: 75%;
                }
            }
        </style>
        <div class="animated fadeInLeft duration-1s delay--3s card search-box">
                <input type="text" placeholder="Cari Negara" id="search">
                <button id="searchButton">Cari</button>
        </div>
        `;
    }
}

customElements.define("search-box", SearchBox);