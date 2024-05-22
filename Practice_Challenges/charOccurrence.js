//Write a function called charOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.
/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function charOccurrences(str, char) {
  let charCount = 0;
  str = str.toLowerCase();
  char = char.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      ++charCount;
    }
  }
  return charCount;
}

console.log(charOccurrences("jayGaneshAAA", "a")); //5

function charOccurrences(str, char) {
  const regex = new RegExp(char, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(charOccurrences("jayGanesh", "a")); // Output: 5
