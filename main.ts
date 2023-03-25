import { Person } from "./src/decorators/person.js";
import { example5 } from "./src/event-loop/index.js";

const p = new Person("Ron");
p.greet();

example5();
