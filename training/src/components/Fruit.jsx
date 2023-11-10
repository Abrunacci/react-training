export default function Fruit({fruit}){
  return (<li key={fruit.name}>{fruit.name}: ${fruit.price} </li>)
};