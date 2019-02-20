const events = require('events');

const util = require('util');
const Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ruy');
const people = [james, mary, ryu];
 
people.forEach(person => {
    person.on('speak', mssg => {
        console.log(person.name + ' said: ' + mssg);
    })
});

james.emit('speak', 'hey dude');
ryu.emit('speak', 'i want curry');