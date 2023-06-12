import { parseISO } from 'date-fns';

export default function main() {
  const parsed = parseISO('1987-6-18');
  console.log(parsed);
}
