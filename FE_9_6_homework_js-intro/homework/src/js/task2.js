var side1 = prompt('Enter first side value');
var side2 = prompt('Enter second side value');
var angle = prompt('Enter angle');
var sumAngle = 180;
var gamma = Math.PI/sumAngle * parseFloat(angle);
var side3 = Math.sqrt(side1 * side1 + side2 * side2 - 2*side1*side2*Math.cos(gamma));
var perimeter = Number(side1) + Number(side2) + Number(side3);
var square = Math.sqrt(perimeter/2 * ((perimeter/2 - Number(side1)) * 
(perimeter/2 - Number(side2)) * (perimeter/2 - Number(side3))));
var message = side3 % 1 !== 0 || perimeter % 1 !== 0 || square % 1 !== 0 ? 'c length:' + side3.toFixed(2) +
 ' ' + 'Triangle square:' + perimeter.toFixed(2) + ' ' + 'Triangle perimeter: ' + square.toFixed(2) : 
 'c length:' + side3 + ' ' + 'Triangle square:' + perimeter + ' ' + 'Triangle perimeter: ' + square;
var consoleMessage = side1 > 0 && side2 > 0 && angle > 0 ? message : 'Invalid data';
console.log(consoleMessage);