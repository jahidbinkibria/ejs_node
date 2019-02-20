var counter = function (arr){
    return `there are ${arr.length} element in the array`;
}

var adder = function(a,b){
    return `The some of the 2 no is ${a+b}`;
}

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;