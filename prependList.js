// var list =" { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}";

// console.log("{" + "value : 0, " + "rest:" + list + "}");

function prepend(a, list) {
  return "{" + "value : " + a + " rest:" + list + "}"
}

console.log(prepend(10,list));
