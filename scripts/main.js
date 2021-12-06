import { BusinessList, BusinessListNewYork, BusinessListManufacturing, BusinessListAgents } from "./BusinessList.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = `

  <article class="businessList">
    <h1>Active Businesses</h1>
    ${BusinessList()}
  </article>

  <article class="businessList--newYork">
    <!-- New York businesses go here --->
    <h1>New York Businesses</h1>
    ${BusinessListNewYork()}
  </article>
  
  <article class="businessList--manufacturing">
    <!-- Manufacturing businesses go here --->
    <h1>Manufacturing Businesses</h1>
    ${BusinessListManufacturing()}
  </article>

  <article class="agents">
    <!-- Purchasing agents go here --->
    <h1>Purchasing Agents</h1>
    ${BusinessListAgents()}
  </article>
  `
}

renderAllHTML();