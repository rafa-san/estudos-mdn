// #01 - length
/*
const browserType = "mozilla";
//console.log(browserType.length);

console.log(browserType[0]); // m

console.log(browserType[browserType.length - 1]); // a
// The length of the string "mozilla" is 7, but because the count starts at 0, the last character's position is 6; using length-1 gets us the last character.

***

if (browserType.length > 5) {
  console.log("Palavra muito grande");
}
*/



// #02 - Testing if a string contains a substring
/*
if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


if (browserType.startsWith("zilla")) {
  console.log("Found zilla!")
} else {
  console.log("No zilla here!");
}


if (browserType.endsWith("zilla")) {
  console.log("Found zilla!")
} else {
  console.log("No zilla here!");
}
*/


// #3 - Finding the position of a substring in a string
/*
You can find the position of a substring inside a larger string using the indexOf() method. This method takes two parameters – the substring that you want to search for, and an optional parameter that specifies the starting point of the search.

If the string contains the substring, indexOf() returns the index of the first occurrence of the substring. If the string does not contain the substring, indexOf() returns -1.

const tagline = "MDN - Resources for developers, by developers";
//console.log(tagline.indexOf("developers")); //20
//console.log(tagline.indexOf("x")); //-1



const tagline = "MDN - Resources for developers, by developers";

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
 */



//#3 Extracting a substring from a string
/*
You can extract a substring from a string using the slice() method. You pass it:

. he index at which to start extracting

. the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.

const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

//The character at index 1 is "o", and the character at index 4 is "l". So we extract all characters starting at "o" and ending just before "l", giving us "ozi".

// If you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter. Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:

console.log(browserType.slice(2)); // "zilla"
*/



// #4 - Changing case
/*
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
 */



// #5 - Updating parts of a string

/*
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"


// Note that replace(), like many string methods, doesn't change the string it was called on, but returns a new string. If you want to update the original browserType variable, you would have to do something like this:

let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"




// Also note that we now have to declare browserType using let, not const, because we are reassigning it.

//Be aware that replace() in this form only changes the first occurrence of the substring. If you want to change all occurrences, you can use replaceAll():

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"

*/

const str = "Merry Christmas my love";
const resultado = str.includes("Christmas");

console.log(resultado);
