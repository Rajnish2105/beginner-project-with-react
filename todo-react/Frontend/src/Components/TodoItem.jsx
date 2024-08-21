import "./TodoItem.css"
import close from "../assets/close.svg"
export default function TodoItem({ todo, handleDelete, updateTodo }) {

    const style = {
        opacity: 0.5,
        textDecoration: "line-through",
    };

    function capFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="TodoItem">
            <input onChange={() => updateTodo(todo._id)} type="checkbox" id={todo._id} name="checkbox" checked={todo.completed ? true : false} />
            <label style={todo.completed ? style : {}} htmlFor={todo._id} >{capFL(todo.text)}</label>
            <button type="button" onClick={() => handleDelete(todo._id)}>
                <img src={close} />
            </button>
        </div >
    )
}