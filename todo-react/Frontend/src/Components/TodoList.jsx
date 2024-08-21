import { useEffect, useState } from "react";
import axios from "axios"
import TodoForm from './TodoForm'
import TodoItem from "./TodoItem";
import "./TodoList.css"

async function GetTodos() {
    const response = await axios.get('http://localhost:3000')
    const data = response.data;
    return data || [];
}

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const initialTodos = await GetTodos();
            setTodos(initialTodos);
        }
        fetchData();
    }, []);

    const addTodo = async (text) => {
        if (!text) console.log("empty")
        const dataToSend = {
            text: text,
            completed: false
        }
        await axios.post('http://localhost:3000/', dataToSend)
            .catch(err => {
                console.log('Something went wrong with the server');
            })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/${id}`)
            .then(res => {
                setTodos(res.data || []);
            })
    }

    const updateTodo = async (id) => {
        await axios.put(`http://localhost:3000/${id}`)
            .then(res => {
                setTodos(res.data)
            })
    }

    let done = 0;
    todos.map(todo => {
        if (todo.completed === true) {
            return done += 1;
        }
        else {
            return done
        }
    })

    return (
        <div className="Box">
            <TodoForm addTodo={addTodo} />
            <div className="TodoList">
                {todos.map((todo) => {
                    return (<TodoItem key={todo._id} todo={todo} handleDelete={handleDelete} updateTodo={updateTodo} />)
                })}
                <p><i>{done}/{todos.length} Completed</i></p>
            </div>
        </div>

    )
}