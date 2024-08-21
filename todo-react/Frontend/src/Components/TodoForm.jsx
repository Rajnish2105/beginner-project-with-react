import { useState } from "react";
import "./TodoForm.css"

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        addTodo(text);
        setText("");
    }

    return (
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} placeholder="Todo here..." />
            </form>
        </div>
    )
}