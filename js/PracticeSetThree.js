//returns boolean

const sentence = "This is Vedant"
const word = "fox"

console.log(sentence.includes(word));
console.log(`The word is ${word} ${sentence.includes(word) ? `is` : `is not`} in the sentence`);
