export default function Fruit({fruit}){
  console.log(fruit);
  return (<li key={fruit.name}>{fruit.name}: ${fruit.price} {fruit.price > 10 ? fruit.discount+"% OFF!" : "" } {fruit.soldout ? "- SOLDOUT" : ""} </li>)
};