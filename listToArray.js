// Below is code to convert a list to an array.
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

// This is what I wrote to understand the problem
/*
var a = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}";

var b = a.indexOf("{");

var c = a.length;

var d = a.slice(b+1,c);

var e = d.indexOf("{");

var f = d.slice(b+1,e);

var g = f.indexOf(":");

var h = g + 2;

console.log(f[h]);

var i = d.slice(e+1,c);

var j = i.indexOf("{");

var k = i.slice(1,j);

var l = k.indexOf(":");

var m = l + 2;

console.log(k[m]);

var n = i.slice(j+1,c);

var o = n.indexOf("{");

var p = n.slice(1,o);

var q = p.indexOf(":");

var r = q + 2;

console.log(p[r]);

var s = n.slice(o+1,c);

console.log(s);

var t = s.indexOf("{");

console.log(t);

if (t < 0)

console.log("The end of the list is reached");

var u = s.indexOf("}");

var v = s.slice(1,u);

console.log(v);
*/
