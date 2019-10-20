import { Maybe, just, none } from "./fp/types/Maybe";
import { maybeOrMonoid, stringMonoid } from "./fp/instances/monoids";

const combinatorFrom = 
 (divisor: number) => (word: string) => (n: number) => n % divisor === 0 ? just(word) : none<string>();
const fizz: (n: number) => Maybe<string> = combinatorFrom(3)('Fizz');
const buzz: (n: number) => Maybe<string> = combinatorFrom(5)('Buzz');
const combinators = [fizz, buzz];
const combinatorsMonoid = maybeOrMonoid(stringMonoid);

export function fizzBuzz(n: number): string {
  return combinators
    .map(combinator => combinator(n))
    .reduce(
      (acc: Maybe<string>, elem: Maybe<string>) =>
        combinatorsMonoid.combine(acc, elem),
      combinatorsMonoid.identity
    ).orElse(`${n}`);
}