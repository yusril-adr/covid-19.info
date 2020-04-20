import worldImg from "../../img/world.png"

class InformationData extends HTMLElement {
    connectedCallback() {
        this.connect();
    }

    set search(country) {
        [this.region, this.positive, 
            this.deaths, this.recovered] = [country.attributes.Country_Region, country.attributes.Confirmed, 
                country.attributes.Deaths, country.attributes.Recovered];         
        this.render();
    }

    connect() {
        this.innerHTML = `
        <style>
            .connect {
                height: 300px;
                color: grey;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .connect > h1 {
                text-align: center;
            }
        </style>
        <div class = "animated fadeInRight card connect">
            <h1>Data belum dicari</h1>
        </div>
        `
    }

    render() {
        this.innerHTML = `
        <style>
            .information-data {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
            }

            .information-data > img {
                width: 50%;
                margin: 20px;
                border: 5px solid white;
                border-radius: 12px;
                box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, .7);
                transition: .3s;
            }

            .information-data > img:hover {
                transform: scale(1.05);
            }

            .data {
                width: 60%;
                margin: auto;
                display: flex;
                justify-content: space-around;
            }

            @media screen and (max-width: 1000px) {
                .data {
                    width: 80%;
                    flex-wrap: wrap;
                }

                .information-data > img{
                    width: 80%;
                }
            }
        </style>
        <div class="animated fadeInRight card information-data">

            <h2>${this.region.toUpperCase()}</h2>
            <img src="${worldImg}" alt"world">

            <div class="data">
                <p>Positif : ${this.positive}</p>
                <p>Sembuh : ${this.deaths}</p>
                <p>Meninggal : ${this.recovered}</p>
            </div>
        </div>
        `
    }
}

customElements.define("information-data", InformationData);