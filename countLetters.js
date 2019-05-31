function countLetters(string) {
    const counter = {};
    for (let character = 0; character < string.length; character++) {
     let char = string[character];
     if (char !== ' ') {
       if (typeof counter[char] === "number") {
         counter[char] += 1;
       } else {
         counter[char] = 1;
         }
       }
     }
     return counter;
   }
   console.log(countLetters('CodeCore in the building! 232323'));