import { Business, BusinessNewYork, BusinessManufacturing } from "./Business.js";


export const BusinessList = () => {
  const businessHTML = Business();
  return `
  <article class="businessList">
    <h1>Active Businesses</h1>
    ${Business()}
  </article>

  <article class="businessList--newYork">
    <!-- New York businesses go here --->
    <h1>New York Businesses</h1>
    ${BusinessNewYork()}
  </article>
  
  <article class="businessList--manufacturing">
    <!-- Manufacturing businesses go here --->
    <h1>Manufacturing Businesses</h1>
    ${BusinessManufacturing()}
  </article>

  `
}