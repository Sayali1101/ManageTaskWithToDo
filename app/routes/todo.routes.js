module.exports = (app) => {
    const todos = require('../controllers/todo.controller.js');

    // Create a new Todo
    app.post('/todos', todos.create);

    // Retrieve all Todos
    app.get('/todos', todos.findAll);

    // Retrieve a single Todo with todoId
    app.get('/todos/:todoId', todos.findOne);

    // Update a Todo with todoId
    app.put('/todos/:todoId', todos.update);

    // Delete a Todo with todoId
    app.delete('/todos/:todoId', todos.delete);
}