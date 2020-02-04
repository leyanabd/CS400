//PS1PR3

/*
lambdafn = fat arrow function that takes a string ,string, and a function, fn.
Returns the result of executing fn on string.
 */

let lambdafn = (fn, string) => { return fn(string)};


//fn1 = returns an array of a substrings, where str is broken up at 'c'
//simpler version, inspired by lecture on February 4th

let fn1 = (str) => str.replace(/c/g, "*c").split('*');

/*
fn2 = function that replaces all of 'a' characters with 'A', returns the object vals that contains the original string, modified string,
the number of characters replaced, and the length of the string.
 */

let fn2 = function(str) {
    let vals = {
        'originalString': str,
        'modifiedString': str.replace(/a/g, "A"),
        'numberReplaced': (str.match(/a/g) || []).length,
        'length': str.length
    };
    return vals;
};

//testing
console.log('fn1: ', lambdafn(fn1,'supercalifragilisticexpialidocious'));
console.log('fn2: ', lambdafn(fn2, 'supercalifragilisticexpialidocious'));

