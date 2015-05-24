// Below is code to convert a list to an array, then pull out a desired element from the array.

function nth(a,index) {

  var u = a;

  var b = u.indexOf("{");

  var t = b;

  var c = a.length;

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

      theArray.push(f[h]);

      n = n + 1;

   }

   return theArray[index];

}


console.log(nth("{ value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null }}}}",3));


