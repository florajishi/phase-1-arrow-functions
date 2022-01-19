//regular function expression method
    // function foo(){
    //     return 'bar'
    // }
//function alternative method
    // const foo = function() {
    //     return 'bar'
    // }
//here, foo is the variable. The function is evaluated and thus bar is assigned to foo.
//this can also be referred to as an anonymous function, but since foo is assigned, we can call the function foo.
//neither is better than the other. Use whichever one works for the code
//*

//Declare functions using an Arrow Function
//Arrow functions are shorthand ways to declare functions. It keeps the code clean and is easier and less time consuming to type.
    // const add = (parameter1, parameter2) => parameter1 + parameter2;
    // add(2,3) //=> 5
//Curly braces unnecessary if the function body is a single expression
//No parentheses needed for one parameter
//no return statement needed when there are no braces. The result will automatically return.
//*

//Arrow Functions in cases of more work needed:
    // const sum = (parameter1, parameter2) => {
    //     console.log(`Adding ${parameter1}`)
    //     console.log(`Adding ${parameter2}`)
    //     return parameter1 + parameter2;
    // }
    // sum(1,2)//=> 3
//Return Must be declared in a longer function body
//Curly braces utilized
//END OF NOTES
//*
//beginning of Lab Code
function divide(){
    return 2000 / 100
}

const square = para1 => para1 * para1;
square(2)//=> 4
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(5,3)//=> 8