// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {

  if(cleanString(stringA) === cleanString(stringB)){
    return true
  }
  return false

}

function cleanString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false
//   }

//   for(let char in aCharMap) {
//       if(aCharMap[char] !== bCharMap[char]){
//           return false
//       }
//   }
//   return true
// }

// function buildCharMap(string) {
//   const charMap = {}
//   string = string.replace(/[^\w]/g, '').toLowerCase()

//   for(let char of string){
//       if(charMap[char]) {
//           charMap[char]++
//       } else {
//           charMap[char] = 1
//       }
//   }
//   return charMap
// }
module.exports = anagrams;
