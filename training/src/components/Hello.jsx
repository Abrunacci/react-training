const name= "Anakin";

function displayMessage() {
    return "Hello " + name;
}

function Hello(){
    return <h1>{displayMessage()}!</h1>;
}

export default Hello;

