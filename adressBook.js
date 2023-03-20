function adress(input) {
    let adressBook = {};
    for (const line of input) {
        let [name, adress] = line.split(":");
        adressBook[name] = adress;
    } let adressEntry = Object.entries(adressBook);

    adressEntry.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    let sortedAdress = Object.fromEntries(adressEntry);
    for (const key in sortedAdress) {
        console.log(`${key} -> ${sortedAdress[key]}`);
    }

} adress(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);