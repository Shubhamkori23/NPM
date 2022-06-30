var fs = require('fs');

// function countOcuurences(string, word) {
//     return string.split(word).length - 1;
// }
// var text= 'john john john john john'
// console.log(countOcuurences(text, 'john'))

var fileName = './CompareValue/Read.txt'
var wordToFind = 'shubham';


fs.readFile(fileName, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var aWordsText = contentFile.toLowerCase().split(' ');
    var aFilteredWords = aWordsText.filter(function(word){
        return word.includes(wordToFind);
    })
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});
