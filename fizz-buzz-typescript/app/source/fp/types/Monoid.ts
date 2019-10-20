import deepEqual = require("deep-equal");

export interface Monoid<T> {
    combine(a: T, b: T): T;
    identity: T;
}

export const monoidLaws = {
  leftIdentity: <T>(monoid: Monoid<T>) => (t: T) => deepEqual(monoid.combine(monoid.identity, t), t),
  rightIdentity: <T>(monoid: Monoid<T>) => (t: T) => deepEqual(monoid.combine(t, monoid.identity), t),
  associativity:  <T>(monoid: Monoid<T>) => (a: T) => (b: T) => (c: T) => 
   deepEqual(
     monoid.combine(monoid.combine(a, b),c),
     monoid.combine(a, monoid.combine(b,c))
   )
}