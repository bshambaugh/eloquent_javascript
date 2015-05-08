function range(start, stop, step) {
  var p = []; 
if (start < stop)
  for (var i = start; i <= stop; i = i + step) {
    p.push(i);
   if (i < start) {
     p.pop(i);
     return p; 
   }
  }
else
  for (var i = start; i >= stop; i = i + step) {
    p.push(i);
    if (i > start) {
    p.pop(i);
      return p;
   }
  }
  return p;
}

function sum(p) {
 var q = 0;
 for (var i = 0; i <= p.length - 1; i++) {
 q += p[i];
}
return q;
}  
console.log(range(5, 2, -1));
console.log(range(1, 10, -1));
console.log(sum(range(10, 1, -1)));

