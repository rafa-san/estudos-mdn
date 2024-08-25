// #01
const string = "The revolution will not be televised";
const badString = string;

//console.log(badString);


// #02
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`; // template literals

// console.log(single);
// console.log(double);
// console.log(backtick);


// #03
const name = "Chris";
const greeting = `Hello, ${name}`;

//console.log(greeting);


// #04
const one = "Hello,";
const two = "how are you?";
const joined = `${one} ${two}`;

//console.log(joined);


// #05
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
(score / highestScore) * 100
}%.`;
//console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


// Multiline strings
// #06
const newline = `One day you finally knew
what you had to do, and began,`;
//console.log(newline);

// #07
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);


// Numbers vs. strings
// #08
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

// #09
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string
