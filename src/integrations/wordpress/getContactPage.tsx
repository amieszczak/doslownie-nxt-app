import fetchAPI from "./callout";
import contactPage from "./graph-ql-queries/contact-page";
import { ContactPageQl } from "./graph-ql-types/contact-page";
import { ContactPageType } from "@/app/types/contact-page";

const getContactPage = async (first = 1000): Promise<ContactPageType> => {
    const response = await fetchAPI(contactPage, {first});
    const page: ContactPageQl = response?.page; 

    return{
        adres: page?.kontakt?.adres,
        fieldGroupName: page?.kontakt?.fieldGroupName,
        mail: page?.kontakt?.mail,
        opis: page?.kontakt?.opis,
        telefon: page?.kontakt?.telefon,
        tytulStrony: page?.kontakt?.tytulStrony,
    }
}

export default getContactPage;