export default function Message(){

    function handleClick(){
        console.log("Button clicked")
    }

    return (<div>
        <button onClick={handleClick}>Click to get the message</button>
    </div>)
}