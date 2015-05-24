// This is the looping example from page 33 of Eloquent JavaScript.
var result = 1;
var counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);

// Below is the Code to Print only the values for the numbers in the array.
var a = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null }}}}";
var u = a;
var b = u.indexOf("{");
var t = b;
var c = a.length;
console.log(t);
console.log(u);
var n = 1;
var theArray = [];
while (t >=0) {
var d = u.slice(t+1,c);
var e = d.indexOf("{");
if (n >= 1) 
var f = d.slice(1,e);
else
var f = d.slice(t+1,e)

var g = f.indexOf(":");
var h = g + 2;
u = d;
t = e;
console.log(f[h]);
theArray.push(f[h]);
n = n + 1;
}
console.log(theArray);
