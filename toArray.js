function toArray() {
  var anArray = [];
  for (var i = 0; i < arguments.length; i++)
    anArray.push(arguments[i]);
  return anArray;
}

console.log(toArray("duck", "one", "two", "three"));


function reverseArray(anArray) {
  var rArray = [];
  for (var i = 0; i < anArray.length; i++)
    rArray.unshift(anArray[i]);
  return rArray;
}

console.log(reverseArray(toArray("duck", "one", "two", "three")));

function reverseArrayInPlace () {
  var anArray = [];
  for (var i = 0; i < arguments.length; i++)
    anArray.unshift(arguments[i]);
  return anArray;
}

console.log(reverseArrayInPlace("duck", "one", "two", "three"));

var a = [1, 2, 3];
var b = [];
b.unshift(a[0]);
b.unshift(a[1]);
b.unshift(a[2]);
for (var i = 0; i <= a.length - 1; i++)
  b.unshift(a[i]); 
function seeA (a) {
 return arguments.length;
}
console.log(b);
console.log(a);
