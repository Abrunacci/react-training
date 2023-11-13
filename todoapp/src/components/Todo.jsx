import {useState} from "react";
import Task from "./Task.jsx";

export default function Todo(){

    const [todo, setTodo] = useState("")
    const [tasks, setTasks] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        setTasks([...tasks, todo]);
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    type="text"
                />
                <button type="submit">Add</button>
            </form>

            {tasks.map((task) => (
                <Task key={task} name={task}/>
            ))}
        </div>)
}