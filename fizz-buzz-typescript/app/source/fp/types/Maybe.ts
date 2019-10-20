export interface Maybe<T> {
  map<U>(f: (t: T) => U): Maybe<U>;
  flatMap<U>(f: (t: T) => Maybe<U>): Maybe<U>;
  orElse(t: T): T;
  fold<U>(ifEmpty: () => U, ifSome: (t: T) => U): U;
}

class Some<T> implements Maybe<T> {
  readonly value: T;

  constructor(t: T) {
    this.value = t;
  }

  map<U>(f: (t: T) => U): Maybe<U> {
    return new Some(f(this.value));
  }

  flatMap<U>(f: (t: T) => Maybe<U>): Maybe<U> {
    return f(this.value);
  }

  orElse(t: T): T {
    return this.value;
  }

  fold<U>(ifEmpty: () => U, ifSome: (t: T) => U): U {
    return ifSome(this.value);
  }
}

class None<T> implements Maybe<T> {
  public static readonly instance: Maybe<any> = new None();

  map<U>(f: (t: T) => U): Maybe<U> {
    return None.instance;
  }

  flatMap<U>(f: (t: T) => Maybe<U>): Maybe<U> {
    return None.instance;
  }

  orElse(t: T): T {
    return t;
  }

  fold<U>(ifEmpty: () => U, ifSome: (t: T) => U): U {
    return ifEmpty();
  }
}

export const some: <T>(t: T) => Maybe<T> = <T>(t: T) => new Some(t);
export const none: <T>() => Maybe<T> = () => None.instance;
