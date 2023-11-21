import { RandomCoffee } from "./RandomCoffee";
import axios from "axios";
import { useEffect, useState } from "react";

export function Content() {
  const [coffee, setCoffee] = useState("");

  const handleRandomCoffee = () => {
    console.log("handleRandomCoffee");
    // axios.get("https://coffee.alexflipnote.dev/random.json").then((response) => {
    setCoffee("hello");
    console.log(coffee);
  };
  // };

  return (
    <div>
      <h1>Welcome to the random Coffee Generator!</h1>
      <button onClick={handleRandomCoffee}>Click here</button>
      <RandomCoffee coffeepicture={coffee} />
    </div>
  );
}
