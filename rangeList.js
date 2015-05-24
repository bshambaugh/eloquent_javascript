function rangeList(a, b) {
 if (a <= b)
    return ("{" + "value :" + a + ", rest:" +  rangeList(a + 1, b) + "}");
  else
     return "null";
}


console.log(rangeList(1,3));
