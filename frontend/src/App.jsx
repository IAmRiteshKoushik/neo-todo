import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
// import { Todos } from './components/Todos';

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        // To convert this into an async-await before updating state
    fetch("http://localhost:3000/todos")
        .then(async function(res){
            const json = await res.json();
            console.log(json);
            setTodos(json["todos"]);
        })
    }, []);

    return (
        <div>
            <CreateTodo />
            <div>{todos[0]?.toString()}</div>
            <p>This is a paragraph</p>
        </div>
    );
}

export default App
