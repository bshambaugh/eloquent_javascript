function printList(anArray, a) {
 if (a <= anArray.length - 1)
    return ("{" + "value :" + anArray[a] + ", rest:" +  printList(anArray, a + 1) + "}");
  else
     return "null";
}

function arrayToList(anArray) {
  var a = 0;
  return printList(anArray, a);
}

console.log(arrayToList([1, 2, 3]));

