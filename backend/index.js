
// write basic express boilerplate code,
// with express.json() middleware
// NOT authenticated application

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

// body {
// title: string;
// description: string;
// }

app.use(express.json()); // middleware

// POST endpoint for adding a new TODO 
app.post("/todo", function(req, res){
    const createPayload = req.body;
    // The zod object allows us to parse an incoming JSON using the safeParse mtd
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){ 
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    // put it in MongoDB
});

// GET endpoint for getting all the TODOs
app.get("/todo", function(req, res){

});

// 
app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        });
        return;
    }
    // put it in MongoDB
});
