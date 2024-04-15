const express = require("express");
const { createTodo, updateTodo } = require("./types/types");

const app = express();

app.use(express.json());

// body {
//    title : 
//    description : 
// }
app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    // put it inside MongoDB 
})
app.get("/todos", (req, res) => {
    // Fetch all TODOs from MongoDB
})
app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // update it inside MongoDB
})

app.listen(3000)
