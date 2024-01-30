import { Maybe, just, none } from "./fp/types/Maybe";
import { maybeOrMonoid, stringMonoid } from "./fp/instances/monoids";

type Rule = (n: number) => Maybe<string>

const from = 
 (divisor: number) => (word: string) => (n: number) => n % divisor === 0 ? just(word) : none<string>();
const fizz: Rule = from(3)('Fizz');
const buzz: Rule = from(5)('Buzz');

export function fizzBuzz(n: number): string {
  const byFirst = (acc: Maybe<string>, elem: Maybe<string>) => maybeOrMonoid(stringMonoid).combine(acc, elem);
  const initialAcc = maybeOrMonoid(stringMonoid).identity;
  return [fizz, buzz]
    .map(transform => transform(n))
    .reduce(byFirst, initialAcc).orElse(`${n}`);
}