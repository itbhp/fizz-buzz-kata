export interface Monoid<T> {
    combine(a: T, b: T): T;
    identity: T;
}

export const monoidLaws = {
  leftIdentity: <T>(monoid: Monoid<T>) => (t: T) => monoid.combine(monoid.identity, t) === t,
  rightIdentity: <T>(monoid: Monoid<T>) => (t: T) => monoid.combine(t, monoid.identity) === t,
  associativity:  <T>(monoid: Monoid<T>) => (a: T) => (b: T) => (c: T) => 
   monoid.combine(monoid.combine(a, b),c) ===
   monoid.combine(a, monoid.combine(b,c))
}