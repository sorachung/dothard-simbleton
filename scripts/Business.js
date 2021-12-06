import { getBusiness } from "./database.js";

const businesses = getBusiness();

export const Business = () => {
  return businesses.map(business => {
    return `
    <section>
      <h2>${business.companyName}</h2>
      <div>
        ${business.addressFullStreet}<br>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
      </div>
    </section>
    <hr>
    `
  }).join("")
  
}

export const BusinessNewYork = () => {
  return businesses.filter(business => {
    return business.addressStateCode === "NY"
  }).map(business => {
    return `
    <section>
      <h2>${business.companyName}</h2>
      <div>
        ${business.addressFullStreet}<br>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
      </div>
    </section>
    <hr>
    `
  }).join("")
}

export const BusinessManufacturing = () => {
  return businesses.filter(business => {
    return business.companyIndustry === "Manufacturing"
  }).map(business => {
    return `
    <section>
      <h2>${business.companyName}</h2>
      <div>
        ${business.addressFullStreet}<br>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
      </div>
    </section>
    <hr>
    `
  }).join("")
}

