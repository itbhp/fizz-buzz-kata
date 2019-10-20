import { Maybe, some, none } from "./fp/types/Maybe";
import { maybeOrMonoid, stringMonoid } from "./fp/instances/monoids";

const combinatorFrom = 
 (divisor: number) => (word: string) => (n: number) => n % divisor === 0 ? some(word) : none<string>();
const fizz: (n: number) => Maybe<string> = combinatorFrom(3)('Fizz');
const buzz: (n: number) => Maybe<string> = combinatorFrom(5)('Buzz');


export function fizzBuzz(n: number): string {

  return [fizz, buzz]
    .map(combinator => combinator(n))
    .reduce(
      (acc: Maybe<string>, elem: Maybe<string>) =>
        maybeOrMonoid(stringMonoid).combine(acc, elem),
    ).orElse(`${n}`);
}