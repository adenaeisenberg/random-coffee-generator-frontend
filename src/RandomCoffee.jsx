export function RandomCoffee(props) {
  console.log(props);
  return <img src={props.coffeepicture.file}></img>;
}
