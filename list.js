anArray = [15, 22, 37, 42, 51];

function rangeList(a, b) {
 if (a <= b)
    return ("{" + "value :" + anArray[a] + ", rest:" +  rangeList(a + 1, b) + "}");
  else
     return "null";
}


console.log(rangeList(0,4));

console.log(anArray[1]);
