const contactPage= `
query getContactPage {
  page(id: "cG9zdDo2Mw==") {
    kontakt {
      adres
      fieldGroupName
      mail
      opis
      telefon
      tytulStrony
    }
  }
}`;

export default contactPage;