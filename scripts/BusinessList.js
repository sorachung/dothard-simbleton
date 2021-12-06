import { Business } from "./Business.js";


export const BusinessList = () => {
  const businessHTML = Business();
  return `
  <article class="businesses">
    ${Business()}
  </article>
  `
}