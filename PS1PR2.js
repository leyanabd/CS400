//PS1PR2

//operations: list that stores the correct equation according to the mathematical symbol
const operations = {
    '+': function (left, right) {return left + right},
    '*': function (left, right) {return left * right},
    '-': function (left, right) {return left - right},
    '/': function (left, right) {return left / right},
};

//evaluate = determines the operator of an input string and returns a function to implement the expression of the input string
const evaluate = eq => {
    return operations[eq.split('')[1]](parseInt(eq.split('')[0]), parseInt(eq.split('')[2]));
};

//finaleval = function that evaluates the equation and prints the required statement e.g "4+3 = 7"
const finaleval = eq => console.log(eq, ' = ', evaluate(eq));

//Testing finaleval
const e1 = '4+3'; finaleval(e1);
const e2 = '4*3'; finaleval(e2);
const e3 = '4/3'; finaleval(e3);
const e4 = '4-3'; finaleval(e4);


