// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:
// input: array of numbers
// output: array of all the numbers * 3
// iterate through the array using .map since it will return an array for us
// each value in the iteration needs to be multiplied by 3

// a) Create a test with expect statements for each of the variables provided.

describe("exampleFunction", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]   
        expect(exampleFunction(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(exampleFunction(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

// FAIL  ./code-challenges.test.js
// exampleFunction
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// ● exampleFunction › takes in an array of numbers and returns an array with all the numbers multiplied by 3

//   ReferenceError: exampleFunction is not defined

// b) Create the function that makes the test pass.

// const exampleFunction = (arr) => {
//     return arr.map((num) => {
//         return num * 3
//     })
// }

// PASS  ./code-challenges.test.js
// exampleFunction
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

const exampleFunction = (arr) => {
    return arr.map(num => num * 3)
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
