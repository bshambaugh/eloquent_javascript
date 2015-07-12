// Below is code to convert a list to an array.
//var object = { wolf: true, squirrel: false };
var object = { wolf: true, squirrel: false };
//var a = JSON.stringify(list);
var a = JSON.stringify(object);
var u = a;
var b = u.indexOf("{");
var t = b;
var c = a.length;
console.log(t);
console.log(u);
console.log(c);
var theArray = [];
console.log(u[b+2]);
var d = u.indexOf(":");
console.log(d);
console.log(u[d-1]);
var e = u.indexOf(",");
console.log(e);
//var n = 1;
//var theArray = [];

/*
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
*/

