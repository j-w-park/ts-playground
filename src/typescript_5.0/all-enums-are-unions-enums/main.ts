enum E {
  Foo = 10,
  Bar = 20,
}

function takeValue(e: E) {}

takeValue(E.Foo); // works
// takeValue(123); // error!

// Color is like a union of Red | Orange | Yellow | Green | Blue | Violet
enum Color {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  // Indigo,
  Violet,
}

// Each enum member has its own type that we can refer to!
type PrimaryColor = Color.Red | Color.Green | Color.Blue;

function isPrimaryColor(c: Color): c is PrimaryColor {
  // Narrowing literal types can catch bugs.
  // TypeScript will error here because we'll end up comparing 'Color.Red' to 'Color.Green'.
  // We meant to use ||, but accidentally wrote &&.
  // return c === Color.Red && c === Color.Green && c === Color.Blue;

  return c === Color.Red || c === Color.Green || c === Color.Blue;
}

// One issue with giving each enum member its own type was that those types were in some part
// associated with the actual value of the member.
// In some cases it’s not possible to compute that value – for instance,
// an enum member could be initialized by a function call.

enum E {
  Blah = Math.random(),
}

// TypeScript 5.0 manages to make all enums into union enums by
// creating a unique type for each computed member. That means
// that all enums can now be narrowed and have their members
// referenced as types as well.
