// write basic express boilerplate code,
// with express.json() middleware
// NOT authenticated application

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const { todo } = require('./db.js');

// body {
// title: string;
// description: string;
// }

app.use(express.json()); // middleware

// POST endpoint for adding a new TODO 
app.post("/todo", async function(req, res){
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
    // Using await syntax here because if the database is down
    // it would throw an exception and we need to setup global 
    // catch to handle that.
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo created",
    })
});

// GET endpoint for getting all the TODOs
app.get("/todo", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos,
    })
});

// PUT endpoint for updating an existing TODO
app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        });
        return;
    }

    // put it in MongoDB -- need clarity
    await todo.update({
        _id: req.body.id,
    }, {
            completed: true,
        });
    res.json({
        msg: "Todo marked as complete",
    });
});

app.listen(3000);
