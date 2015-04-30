function findBs(variableString, characterToCount) {
q = 0;
for(var number = 0; number <= variableString.length-1; number++)
  if(variableString.charAt(number) == characterToCount )
     q = q + 1;
return q;
}

console.log(findBs("duckcidc","c"));
findBs("turkey","y");
console.log(q);
findBs("brent","B");
console.log(q);
