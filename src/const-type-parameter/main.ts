interface HasNames {
  readonly names: readonly string[];
}

const example1 = () => {
  function getNamesExactly<T extends HasNames>(arg: T): T['names'] {
    return arg.names;
  }

  // Inferred type: string[]
  const names = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] });

  // The type we wanted:
  //    readonly ["Alice", "Bob", "Eve"]
  // The type we got:
  //    string[]
  const names1 = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] });

  // Correctly gets what we wanted:
  //    readonly ["Alice", "Bob", "Eve"]
  const names2 = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] } as const);
};

const example2 = () => {
  function getNamesExactly<const T extends HasNames>(arg: T): T['names'] {
    //                     ^^^^^
    return arg.names;
  }

  // Inferred type: readonly ["Alice", "Bob", "Eve"]
  // Note: Didn't need to write 'as const' here
  const names = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] });

  const firstName = names[0];

  console.log(firstName.length);
};

declare function fnBad<const T extends string[]>(args: T): void;

declare function fnGood<const T extends readonly string[]>(args: T): void;

const example3 = () => {
  // 'T' is still 'string[]' since 'readonly ["a", "b", "c"]' is not assignable to 'string[]'
  fnBad(['a', 'b', 'c']);

  // T is readonly ["a", "b", "c"]
  fnGood(['a', 'b', 'c']);

  // 'T' is still 'string[]'-- the 'const' modifier has no effect here
  const arr = ['a', 'b', 'c'];
  fnGood(arr); // arguments which wouldn’t (or couldn’t) be modified with 'as const' won’t see any change in behavior
};
