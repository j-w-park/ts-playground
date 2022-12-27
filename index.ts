function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

function* generator2() {
  yield* generator();
  yield 4;
  yield 5;
}

function* generator3() {
  yield* generator2();
  yield 6;
  yield 7;
}

const gen = generator3();

console.log("asdf");
console.log("asdf");
console.log(gen.next(10));
console.log(gen.next());
console.log(gen.return());

// while(gen.) {
// }

// console.log([...generator3()]);
