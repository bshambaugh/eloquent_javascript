var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift()
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

rememberTo("Eat");
rememberTo("Peanut Butter");

console.log(todoList);

whatIsNext();

console.log(todoList);

urgentlyRememberTo("Almond Butter");

console.log(todoList);	

rememberTo("Jellu");

console.log(todoList);	
