// //normal way to write code
// var counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// };

// console.log(counter(['Shubham','aayush','yash']));

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

/*Module exports are the instruction that tells Node. js which bits of code 
(functions, objects, strings, etc.) to “export” from a given file so other
 files are allowed to access the exported code.*/

module.exports = counter;

//export to moduleAndRequire

