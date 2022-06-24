var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg) {
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person. events.EventEmitter);

var shubh = new Person('shubh');
var aayush = new Person('aayush');
var yash = new Person('yash');
var people = [shubh, aayush, yash];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg)
    });
});

shubh.emit('speak', 'hey fam');
yash.emit('speak', 'I want to learn')
