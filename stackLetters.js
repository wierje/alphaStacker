var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters (theAlphabetArray) {
// create a container to hold the stacked letters
var stack = [];
// loop through the alphabet
for (var i = 0; i < alphabet.length; i++) {
    // load the stack array
    stack.push(alphabet[i]);
    //insert spaces
    if ((i + 1) % 3 === 0) {
        stack.push(" ");
    }
    console.log(stack.join("")); //+ (" ".repeat(alphabet.length - i)));
  }
}
stackLetters(alphabet);
