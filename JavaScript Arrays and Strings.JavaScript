1. Array Manipulation in JavaScript
Task 1: Adding and Removing Elements
// Create an array containing some initial elements
let fruits = ['apple', 'banana', 'orange'];

// Add a new element to the end of the array
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// Remove the last element from the array
let removedFruit = fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(removedFruit); // 'grape'

Task 2: Sorting Arrays
// Create an array of numbers in random order
let numbers = [3, 1, 5, 2, 4];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

Task 3: Applying Array Methods

// Create an array of numbers
let numbers = [3, 1, 5, 2, 4];

// Use the map method to double each number in the array
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [6, 2, 10, 4, 8]

// Use the filter method to filter out even numbers from the array
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [3, 1, 5]

// Use the reduce method to calculate the sum of all numbers in the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

2. String Manipulation in JavaScript
Task 1: Obtaining String Length
// Create a string with some text content
let message = "Hello, World!";

// Use the `length` property to obtain the length of the string
let length = message.length;
console.log(length); // 13

Task 2: Converting Cases
// Create a string with mixed-case content
let text = "Hello, World!";

// Convert the string to uppercase
let upperCaseText = text.toUpperCase();
console.log(upperCaseText); // "HELLO, WORLD!"

// Convert the string to lowercase
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText); // "hello, world!"

Task 3: Extracting Substrings
// Create a string with some text content
let sentence = "The quick brown fox jumps over the lazy dog";

// Use the `substring` method to extract a substring from the original string
let subString = sentence.substring(4, 9);
console.log(subString); // "quick"

Task 4: Splitting Strings
// Create a string containing multiple words separated by spaces
let sentence = "The quick brown fox";

// Use the `split` method to split the string into an array of words based on the space delimiter
let words = sentence.split(' ');
console.log(words); // ["The", "quick", "brown", "fox"]
