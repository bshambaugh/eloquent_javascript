// Below is code to convert a list to an array, then pull out a desired element from the array.

//function deepEqual(a,index) {
  var a = { value: 1, value2: 2 };

  var u = JSON.stringify(a);

//  var u = a;

  var b = u.indexOf("{");

  var t = b;

  var c = u.length;

  var n = 1;

  var theArray = [];

/*  while (t >=0) {

    var d = u.slice(t+1,c);

    var e = d.indexOf(",");

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

   return theArray;
   //return theArray[index];

}

*/
//console.log(deepEqual("squirrel: false, wolf: true",3));

console.log(b);

//console.log(c);

console.log(theArray);
