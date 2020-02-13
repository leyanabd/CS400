
//quote to print
const quote = 'All I know is something like a bird within her sang';


//generator that prints each item of an array on a separate line
function* lines (x) {
    //sentence separates the words by the whitespaces;
    let sentence = (qt) => qt.split(/(\s+)/).filter( qt => qt.trim().length > 0);
    let val = sentence(x);

    for (let i = 0; i < val.length; i++) {
        yield val[i];
    }
}

//calling the function on the input quote
let ps2 = lines(quote);
count = 11;
while (count --> 0) {
    console.log(ps2.next().value);
}