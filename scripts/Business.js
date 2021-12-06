export const Business = (businessObj) => {
  return `
  <section>
    <h2>${businessObj.companyName}</h2>
    <div>
      ${businessObj.addressFullStreet}<br>
      ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
    </div>
  </section>
  <hr>
  `
}