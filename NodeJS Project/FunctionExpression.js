/*A function expression can be used as an IIFE (Immediately Invoked
     Function Expression) which runs as soon as it is defined*/
     
// //normal function statement
// function sayHi(){
//     console.log('hi');
// }

// sayHi();

// //Function Expression
// var sayBye = function(){
//     console.log('bye');
// };
// sayBye();

function callFunction(fun){
    fun();
}
//function Expression
var sayBye = function(){
    console.log('bye');
};
callFunction(sayBye);