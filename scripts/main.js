import { BusinessList } from "./BusinessList.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = BusinessList();
}

renderAllHTML();