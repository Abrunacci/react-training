import {useState} from "react";

export default function Todo(){
    const [todo, setTodo] = useState("")
    return (
        <div>
            <form>
                <input
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    type="text"
                />
                <button type="submit">Add</button>
            </form>

        </div>)
}