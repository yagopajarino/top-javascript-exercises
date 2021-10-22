const palindromes = function (s) {
    s = s.replace(/[^\w\s]|_/g, "") // remove punctuation
    s = s.replace(/\s*/g,"") // remove whitespaces
    s = s.toLowerCase() // convert to lowercase (the three could be donde in one line)
    let l = s.length
    let n = 0
    for (let x = 0; x < Math.floor(l/2); x++) {
        if(s[x] === s[l-x-1]){
            n++
        }
    }
    return (n === Math.floor(l/2))
};


// Repo solution. Clever use of string/array methods.
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//     return (
//       processedString
//         .split("")                           // creates the arrat
//         .reverse()                           // reverse it
//         .join("") == processedString         // converts the reversed array into string and check if its the same as the original
//     );
//   };

// Do not edit below this line
module.exports = palindromes;
