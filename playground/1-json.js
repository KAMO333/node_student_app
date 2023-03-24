const fs = require('fs');


// const book = {
//     title: "Meditations",
//     author: "M.K Mmops"
// }



// console.log(book)
// console.log(stringBook)

// const JSONbook = JSON.parse(stringBook);

// console.log(JSONbook)



const dataBuffer = fs.readFileSync('car.json');

// console.log(dataBuffer.toString())

const JSONdata = JSON.parse(dataBuffer.toString());

JSONdata.year = "2013";
// console.log(JSONdata)

const stringCar = JSON.stringify(JSONdata)

console.log(stringCar)

fs.writeFileSync('car.json',stringCar)


