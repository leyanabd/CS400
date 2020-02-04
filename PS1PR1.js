//PS1PR1

// Alphabet = Function in fat arrow notation that organizes letters of a string in alphabetical order
const Alphabet = word => word.split('').sort().join('');

//testing
console.log(Alphabet('supercalifragilisticexpialidocious'));
