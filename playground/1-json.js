import * as fs from 'fs';
// This code demonstrates how to read a JSON file, parse it, and write a new JSON file in Node.js

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON); // Outputs the JSON string representation of the book object

// JSON.parse(bookJSON); // Converts the JSON string back to a JavaScript object
// const parsedBook = JSON.parse(bookJSON);
// console.log(parsedBook.author); // Outputs the original book object
// fs.writeFileSync('1-json.json', bookJSON); // Writes the JSON string to a file named '1-json.json'

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString(); // Converts the buffer to a string
// const data = JSON.parse(dataJSON); // Parses the JSON string to a JavaScript object
// console.log(data.title); // Outputs the title of the book from the parsed object

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString(); // Converts the buffer to a string
const data = JSON.parse(dataJSON); // Parses the JSON string to a JavaScript object

data.name = 'Muhammad Abdulbaqi'; // Modifies the name property of the object
data.age = 24; // Modifies the age property of the object

const userJSON = JSON.stringify(data); // Converts the updated object back to a JSON string
fs.writeFileSync('1-json.json', userJSON); // Writes the updated JSON string to the file
console.log(data); // Outputs the updated object to the console