import nedb from 'nedb-promises';

const database = new nedb({filename : 'menu.db', autoload : true});

const menu = [
    { id: 1, name: 'Hamburger', price: 5.99 },
    { id: 2, name: 'Cheeseburger', price: 6.99 },
    { id: 3, name: 'Fries', price: 2.99 },
    { id: 4, name: 'Soda', price: 1.99 },
    { id: 5, name: 'Hamburger', price: 1.99 }
];

// Stoppa in flera items i databasen
// database.insert(menu);

// Hitta alla document i databasen
const document1 = await database.find({});
console.log(document1);

// Hitta ett specifikt objekt
const document2 = await database.findOne({id : 1});
console.log(document2);

// Hämta alla dokument som innehåller strängen "bur"
const document3 = await database.find({name : /bur/ });
console.log(document3);

// Hämta alla document där price är mindre än 3
const document4 = await database.find({price : { $lt : 3 }});
console.log(document4);

// Hämta alla document där price är större än 3
const document5 = await database.find({price : { $gt : 3 }});
console.log(document5);

// const updatedItem = await database.updateOne({ id : 5}, {"id":5,"name":"Hamburger Deluxe","price":1.99,"_id":"KSxuCyWbWeZbrMCP"});
// console.log(updatedItem);

// Ta bort dokument med id 5
// database.remove({ id: 5 });