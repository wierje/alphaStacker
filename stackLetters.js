var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphabet.sort();
// create a container to hold the stacked letters
var stack = [];
// console.log(alphabet);
// loop through the alphabet
for (var i = 0; i < alphabet.length; i++) {
    // load the stack array
    stack.push(alphabet[i]);
    console.log(stack + (" ".repeat(alphabet.length - i)))
}
