import { getBusiness, getPurchasingAgents } from "./database.js";
import { Business } from "./Business.js";

const businesses = getBusiness();

export const BusinessList = () => {
  let content = ""
  businesses.forEach(business => content += Business(business))
  return content;
  
}

export const BusinessListNewYork = () => {
  let content = ""
  businesses.filter(business => {
    return business.addressStateCode === "NY"
  }).forEach(business => content += Business(business))

  return content;
}

export const BusinessListManufacturing = () => {
  let content = ""
  businesses.filter(business => {
    return business.companyIndustry === "Manufacturing"
  }).forEach(business => content += Business(business))

  return content;
}

export const BusinessListAgents = () => {
  const agents = getPurchasingAgents() 
  let content = "";
  agents.forEach(agent => {
    content += `
    <section>
      <h2>${agent.fullName}</h2>
      <h3>${agent.company}</h3>
      <h3>${agent.phoneNumber}</h3>
    </section>
    <hr>
    `
  })
  
  return content;
}

