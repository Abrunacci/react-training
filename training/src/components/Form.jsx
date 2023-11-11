import {useState} from "react";

export default function Form(){

    const [name, setName] = useState({firstName: "", lastName: ""})

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Firstname"
                    onChange={(e)=>setName({...name, firstName: e.target.value})}
                    value={name.firstName}
                />
                <input
                    type="text"
                    placeholder="Lastname"
                    onChange={(e)=>setName({...name, lastName: e.target.value})}
                    value={name.lastName}
                />
                <button onClick={(e)=>handleSubmit(e)}>Add</button>
            </form>
        </div>)
}