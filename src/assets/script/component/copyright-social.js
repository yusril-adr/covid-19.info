import facebookImg from "../../img/facebook.png";
import instagramImg from "../../img/instagram.png";
import dicodingImg from "../../img/dicoding.png";

class CopyrightSocial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .copyright-social {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }
            .copyright { 
                width: 50%; 
                text-align: center;
            }

            .social {
                width: 50%;
                text-align: center;
            }
            
            .social > p {
                font-size: 20px;
            }
            
            .social figure {
                width: 50%;
                margin: auto;
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
            }
            
            .social figure img { 
                width: 70px;
                border-radius: 50%;
                transition: .3s;
            }
            
            .social figure img:hover {
                transform: scale(1.2);
            }

            @media screen and (max-width: 1000px) {
                .copyright, .social, .social figure {
                    width: 100%;
                }
            
                .social {
                    margin-top: 20px;
                }
            
                .social figure img {
                    width: 85px;
                }
            }
        </style>
        <div class="copyright-social animated fadeInUp">
            <article class="copyright">
                <p>Thanks to Data Pandemi Covid-19 API by Teguh Aprianto.</p><br>
                <p>&copy; 2020 by Yusril Adriansyah Putra.</p>
            </article>

            <article class="social">
                    <p>Find me on :</p>
                    <figure>
                        <a href="https://www.facebook.com/yusril.adr" target="_blank" class="facebook">
                            <img src="${facebookImg}" alt="Facebook">
                        </a>
                
                        <a href="https://www.instagram.com/yusril_adr" target="_blank" class="instagram">
                            <img src="${instagramImg}" alt="Instagram">
                        </a>
                
                        <a href="https://www.dicoding.com/users/648933" target="_blank" class="dicoding">
                            <img src="${dicodingImg}" alt="Dicoding">
                        </a>
                    </figure>
            </article>
        </div>
        `
    }
}

customElements.define("copyright-social", CopyrightSocial);