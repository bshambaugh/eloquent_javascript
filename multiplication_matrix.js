var space = "";	
var size = 16;
for(var y = 1; y <= size; y++) {
  for(var x  = 1; x <= size; x++) { 
      n = y * x;
      space = space + " " + n;   
  }
space = space + "\n";
}
console.log(space);
