////// INSTRUCTIONS /////
// ADD YOUR SOLUTIONS HERE
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  //Create filered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

  //Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length)
  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  )

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0]
  } else {
    return longestWordArr
  }
}
const output = longestWord('Helloo there, my name is Brad')

console.log(output)
