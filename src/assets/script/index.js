import "../style/style.css";
import "./component/jumbotron-title.js";
import "./component/information-data.js";
import "./component/search-box.js";
import "./component/copyright-social.js";
import "./component/not-found.js"
import DataSource from "./data/source.js";

const main = () => {
    const bodyElement = document.querySelector("body");
    const searchElement = document.querySelector("search-box");
    const dataElement = document.querySelector("information-data");
    const notFoundElement = document.createElement("not-found");

    const onButtonClicked = () => {
        if(searchElement.value != "") {
            DataSource.search(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
        }
    };
    
    const renderResult = results => {
        dataElement.search = results;
    };

    const fallbackResult = message => {
        notFoundElement.message = message;
        bodyElement.appendChild(notFoundElement);
        notFoundElement.clickEvent = fallbackOver;
    };

    const fallbackOver = () => {
        bodyElement.removeChild(notFoundElement);
    };

    searchElement.clickEvent = onButtonClicked;
}

document.addEventListener("DOMContentLoaded", main);