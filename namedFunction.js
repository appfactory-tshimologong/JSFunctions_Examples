//This is an example of a NAMED function.
//NOTE the var a and b.  They are defined after the function is defined.
//This will work because they are kept in memory until the function is RUN.
//--------------------------------------

function findBiggestFraction1(){
    console.log("The function is running!");

    a>b ? console.log("a:",a):console.log("b",b);
}

var a=3/4;
var b=5/7;

findBiggestFraction1();

//Although this will work, it is not good practice to use variables 
//defined outside of the function.  It is much better to pass the values into the function.
//Why?  So that the function can be run again and again.
//-----------------------------------------------------------------------------------------

function findBiggestFraction2(a,b){
    console.log("The function is running!");

    a>b ? console.log("a:",a):console.log("b",b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction2(firstFraction,secondFraction);

//Mostly you don't want to just log the result, you want to do something with it in the code.
//That is when you use return
//-------------------------------------------------------------------------------------------

function findBiggestFraction3(a,b){
    console.log("The function is running!");

    a>b ? result = ["firstFraction:",a]:["secondFraction",b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

console.log(findBiggestFraction3(firstFraction,secondFraction));

