import * as _ from 'lodash-es';

interface Data {
  id: number;
  name: string;
}

export default function main() {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' },
    { id: 5, name: 'Jenny' },
    { id: 6, name: 'Jen' },
    { id: 7, name: 'Jenifer' },
  ];
  const last = _.chain(data).sortBy('name').last().value();
  if (last === undefined) {
    throw new Error('last is undefined');
  }
  // console.log(_.chain(data).sortBy('name').last().value());
  // const data = [
  //   { id: 1, name: 'John' },
  //   { id: 1, name: 'Jane' },
  //   { id: 1, name: 'Jack' },
  //   { id: 2, name: 'Jill' },
  //   { id: 2, name: 'Jenny' },
  //   { id: 7, name: 'Jen' },
  //   { id: 7, name: 'Jenifer' },
  // ];
  // console.log(_.chain(data).uniqBy('id').map('name').value());
}
