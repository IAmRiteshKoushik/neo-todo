// Creating specific schemas for our specific project
/* Todo {
 *      title: string,
 *      description: string,
 *      completed: boolean,
*  }
*/ 
const mongoose = require("mongoose");

// Adding the MongoDB url (better to use .env file)
mongoose.connect("mongodb://localhost:27017/todo-application")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};
