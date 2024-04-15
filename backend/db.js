const mongoose = require("mongoose");
/*
 * TODO {
 *      title: string,
 *      description: string,
 *      completed: boolean
 * }
 * */
mongoose.connect("mongodb://localhost:27017/todo-db")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}
