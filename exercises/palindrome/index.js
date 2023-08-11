// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
// let left = 0;
// let right = str.length - 1

// while(left < str.length && right < str.length){
//   if(left !== right){
//     return false
//   }else if( left === right){
//     left++
//     right--
//   }
//   return true

// }

// }

// function palindrome(str){
//   const reversed = str.split('').reverse().join('')

//   if(reversed === str){
//     return true
//   } else{
//     return false
//   }
// }

function palindrome(str){
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })

}


module.exports = palindrome;
