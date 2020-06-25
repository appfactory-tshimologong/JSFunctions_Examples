//Immediately Invoked Functional Expressions
//To populate a variable with the result of a anonymous function. 
//The reason you would use this type of function is that it is run as soon as the
//browser encounters it.
//NB.  The first time the script is run, the function is not influenced by anything that happens futher down the page!
//--------------------------------------------------------------------------------------------------------------------


var firstFraction = 5/7;
var secondFraction = 3/4;

var theBiggest = (function(a,b){
    return a>b ? ["a",a]:["b",b];
})(firstFraction,secondFraction)

console.log(theBiggest);

