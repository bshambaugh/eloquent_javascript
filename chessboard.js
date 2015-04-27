var space = "";	
var size = 16;
for(var y = 1; y <= size; y++) {
  for(var x  = 1; x <= size; x++) { 
      if(y % 2 !== 0) {       
       if(x % 2 == 0)
         space = space + "#";
       else
         space = space + " ";
 
       }
       else {
         if(x % 2 == 0)
           space = space + " "
         else
           space = space + "#";
       }   
  }
space = space + "\n";
}
console.log(space);
