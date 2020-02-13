
//regular fibonacci sequence
function* fibs(x = 0) {
    let [val1, val2, result] = [0, 1, 0];
    while(true) {
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//use fibs to yield only the even numbers in a fibonacci sequence
function* evenfib(x)
{
    let f = fibs(x);
    //first even number is 0 so we just yield that
    yield 0;
    while (true) {
        let f2 = f.next().value;
        if (f2 % 2 == 0) {
            yield(f2)
        }
    }
}


//printing the first 6 even numbers
mine = evenfib(-2);
let ct = 6;
while (ct --> 0) {
    console.log(mine.next().value);
}












