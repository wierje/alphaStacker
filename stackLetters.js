var stack = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
stack.sort();
console.log(stack);
for (var previous = stack[0]; previous < stack.length(); stack++) {
    console.log(previous);
}
