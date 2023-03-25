export const example1 = () => {
  console.log("example 1 start");
  setTimeout(() => console.log("타임아웃"), 0);
  console.log("example 1 end");
};

export const example2 = () => {
  console.log("example 2 start");
  setTimeout(() => console.log("타임아웃"), 0);
  const prevTime = Date.now();
  while (true) {
    if (Date.now() - prevTime > 2000) {
      break;
    }
  }
  console.log("example 2 end");
};

export const example3 = () => {
  console.log("example 3 start");
  new Promise((resolve) => resolve(console.log("프로미스")));
  console.log("example 3 end");
};

export const example4 = () => {
  console.log("example 4 start");
  Promise.resolve().then(() => console.log("프로미스 then"));
  console.log("example 4 end");
};

export const example5 = () => {
  console.log("example 5 start");
  setTimeout(() => console.log("타임아웃"), 0);
  Promise.resolve()
    .then(() => console.log("프로미스 then"))
    .then(() => console.log("프로미스 then2"));
  console.log("example 5 end");
};
