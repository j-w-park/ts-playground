import * as _ from 'lodash-es';

interface Data {
  id: number;
  name: string;
}

const data = undefined as Data[] | undefined;
// [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Jack' },
//   { id: 4, name: 'Jill' },
//   { id: 5, name: 'Jenny' },
//   { id: 6, name: 'Jen' },
//   { id: 7, name: 'Jenifer' },
// ];

const main = () => {
  // const last = _.chain(data).sortBy('name').last().value();
  // if (last === undefined) {
  //   throw new Error('last is undefined');
  // }
  // console.log(_.chain(data).sortBy('name').last().value());
};

export default main;
