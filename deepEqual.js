function deepEqual(a,b) {
if(typeof a == 'object')
   console.log('a an object');
if(typeof b == 'object')
   console.log('b an object');
if (a === b)
   return true;
else
   return false;
}

console.log(deepEqual([3,2],[3,2]));
