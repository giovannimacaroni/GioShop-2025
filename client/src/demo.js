var message = "Hello, World!";
var isComlete = false;
var todos = [];
function addTodo(title) {
    var newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
function toggleToldo(id) {
    var todo = todos.find(function (todo) { return todo.id === id; });
    if (todo) {
        todo.completed = !todo.completed;
    }
}
addTodo("Build API");
addTodo("Publish app");
toggleToldo(1);
console.log(todos);
