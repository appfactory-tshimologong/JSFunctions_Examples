//Anonymous functions work in a very similar way to named functions, 
//except that they are not named (obviously!) and if you want to use them again, they need to be assigned to a variable
//or hooked to an event
//---------------------------------------------------------------------------------------------------------------------

var theBiggest = function(a,b){
    var result;
    a > b ? result= ["a",a]:["b",b];
    return result;
}

//log out the VARIABLE (without parenthesis) and you get the whole function code logged out.
//-------------------------------------------------------------------------------------------
console.log(theBiggest);


//Use the variable AS A FUNCTION (with the parenthesis) and you get the result
//--------------------------------------------------------------------------------
console.log(theBiggest(3/4,5/7));

