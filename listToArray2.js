/* var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
   }
  }
}; */

var a = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}";

var b = "The brown fox.";

console.log(a.indexOf("{"));

console.log(a.length);

console.log(a.slice(1,62));

var c = a.slice(1,62);

var cc = c.indexOf("{");

console.log("cc is:"+cc);

console.log(a.slice(1,17));

console.log(c.indexOf("{"));

var d = a.slice(1,17);

var e = d.indexOf(":") + 3;

console.log(d.indexOf(":"));

console.log(e);

console.log(a[e]);

console.log(a.trim());
