import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    function incrementCount(){
        setCount(count + incrementBy);
    }

    function decrementCount(){
        count > 0 ? setCount(count - incrementBy) : null
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }

    function decreaseIncrement(){
        incrementBy > 0 ? setIncrementBy(incrementBy - 1) : null
    }

    return (<div>
        <h1>Count value is: {count}</h1>
        <button onClick={incrementCount}>Increment count</button>
        <button onClick={decrementCount}>Decrement count</button>

        <h1>We are incrementing the the value by {incrementBy}</h1>
        <button onClick={increaseIncrement}>Increase Increment</button>
        <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>)
}