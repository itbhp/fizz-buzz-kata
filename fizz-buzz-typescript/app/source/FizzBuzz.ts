import { Maybe, some, none } from "./fp/types/Maybe";
import { maybeOrMonoid, stringMonoid } from "./fp/instances/monoids";

const combinatorFrom = 
 (divisor: number) => (word: string) => (n: number) => n % divisor === 0 ? some(word) : none<string>();
const fizz: (n: number) => Maybe<string> = combinatorFrom(3)('Fizz');
const buzz: (n: number) => Maybe<string> = combinatorFrom(5)('Buzz');
const combinators = [fizz, buzz];

export function fizzBuzz(n: number): string {
  const monoid = maybeOrMonoid(stringMonoid);
  return combinators
    .map(combinator => combinator(n))
    .reduce(
      (acc: Maybe<string>, elem: Maybe<string>) =>
        monoid.combine(acc, elem),
      monoid.identity
    ).orElse(`${n}`);
}