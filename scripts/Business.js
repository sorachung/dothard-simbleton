import { getBusiness } from "./database.js";

const businesses = getBusiness();

export const Business = () => {
  return businesses.map(business => {
    return `
    <section>
      <h2>${business.companyName}</h2>
      <div>
        ${business.addressFullStreet}<br>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</span>
      </div>
    </section>
    <hr>
    `
  }).join("")
  
}