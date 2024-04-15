import { useState } from "react";

export const CreateTodo = () => {
    // easier if you use the axios library
    // cleaner syntax
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} 
                type="text" 
                placeholder="title"
                onChange={function(e){
                    const value = e.target.value;
                    setTitle(value);
                }}
            >
            </input>
            <input style={{ 
                padding: 10,
                margin: 10
            }}
                type="text" 
                placeholder="description"
                onChange={function(e){
                    const value = e.target.value;
                    setDescription(value);
                }}
            ></input>
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        })
                    }).then(async function(res){
                        const json = await res.json();
                        alert("Todo added")
                    })
                }}
            >Add a todo</button>
        </div>
    );
}
