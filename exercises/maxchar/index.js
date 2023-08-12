// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let maxCount = 0
  let maxChar = ''

  //loop through and create an object with frequency
  for (let char of str){
    if(charMap[char]){
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for(let char in charMap){
    if(charMap[char] > maxCount){
      maxCount = charMap[char]
      maxChar = char
    }
  }

return maxChar  

  /// loop through and compare max to current value in array and return maxchar
}

module.exports = maxChar;
