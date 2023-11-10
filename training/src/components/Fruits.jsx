import Fruit from "./Fruit.jsx";

export default function Fruits() {
    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"]
    const fruits = [
        {name: "apple", price: 10, discount: 10},
        {name: "banana", price: 6, discount: 10},
        {name: "mango", price: 20, discount: 10},
        {name: "pineapple", price: 12, discount: 10},
        {name: "orange", price: 8, discount: 10},


    ]
    return (
        <div>
            {fruits.map(fruit => <Fruit key= {fruit.name} fruit={fruit} />)}
        </div>
    )
};