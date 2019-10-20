import { Monoid } from "../types/Monoid";
import { Maybe, none, just } from "../types/Maybe";

export function maybeOrMonoid<T>(tMonoid: Monoid<T>): Monoid<Maybe<T>> {
    return {
        combine(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
            return a.fold(
                () => b,
                (valA: T) => b.fold(() => a, (valB: T) => just(tMonoid.combine(valA, valB))),
            );
        },
        identity: none(),
    }
};

export const stringMonoid: Monoid<string> = {
    combine(a: string, b: string) {
        return a + b;
    },
    identity: ''
}