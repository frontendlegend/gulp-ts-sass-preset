import { sayHello } from "./greet";

const showHello = (divName: string, name: string) => {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");