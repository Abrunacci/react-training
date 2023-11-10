import Hello from "./components/Hello.jsx";

function App() {
    const person = {
        name: "Barney",
        message: "That's gross, ",
        emoji: "x.x",
        seatNumbers: [1, 2, 4, 5, 6]
    }
  return (
    <div className="App">
        <Hello person={person}/>
    </div>
  )
}

export default App


/* coderbyte technical assessment:
    - Multiple choice
    - Codigo
   Entrevista tecnica
   1 o 2 entrevistas con cliente
 */