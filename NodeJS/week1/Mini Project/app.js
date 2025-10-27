const { ajouterContact, listerContacts} = require("./contactService.js");
const { formaterContact } = require("./utils/format.js");

ajouterContact("Alice", "0693964636");
ajouterContact("Bob",  "0789456123");

listerContacts().forEach(c => console.log(formaterContact(c)));