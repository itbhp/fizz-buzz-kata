type Semigroup<T> = {
  combine(t1: T, t2: T) : T;
};

type Predicate<T> = (t: T) => boolean;

const fizzPredicate = (num: number) => num % 3 === 0;
const buzzPredicate = (num: number) => num % 5 === 0;

class AndSemigroup implements Semigroup<Predicate<number>>{
  combine(t1: Predicate<number>, t2: Predicate<number>) : Predicate<number> {
    return (n: number) => t1(n) && t2(n);
  }
}

type Transformation = (n: number) => string

const identity: Transformation = (n: number) => `${n}`;
// tslint:disable-next-line:max-line-length
const transform =  (p: Predicate<number>) => (placeHolder: string) => (n: number) => p(n) ? placeHolder : '';
const fizz: Transformation = transform(fizzPredicate)('Fizz');
const buzz: Transformation = transform(buzzPredicate)('Buzz');
// tslint:disable-next-line:max-line-length
const fizzBuzzT: Transformation = transform(new AndSemigroup().combine(fizzPredicate, buzzPredicate))('FizzBuzz');

class ChainSemiGroup implements Semigroup<Transformation> {
  combine(t1: Transformation, t2: Transformation): Transformation {
    return (n: number) => {
      const t1Res = t1(n);
      return t1Res === '' ? t2(n) : t1Res;
    };
  }
}

const chain = new ChainSemiGroup();

const fizzBuzz = chain.combine(chain.combine(fizzBuzzT,fizz), chain.combine(buzz, identity));

describe('FizzBuzz Kata', () => {
  describe('numbers not fizz or buzz', () => {
    it('should give "1" for 1', () => {
      expect(fizzBuzz(1)).toEqual('1');
    });

    it('should give "2" for 2', () => {
      expect(fizzBuzz(2)).toEqual('2');
    });

    it('should give "4" for 4', () => {
      expect(fizzBuzz(4)).toEqual('4');
    });
  });
  describe('fizz numbers', () => {
    it('should give "Fizz" for 3', () => {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });
    it('should give "Fizz" for 6', () => {
      expect(fizzBuzz(6)).toEqual('Fizz');
    });
    it('should give "Fizz" for 9', () => {
      expect(fizzBuzz(9)).toEqual('Fizz');
    });
  });
  describe('buzz numbers', () => {
    it('should give "Buzz" for 5', () => {
      expect(fizzBuzz(5)).toEqual('Buzz');
    });
    it('should give "Buzz" for 10', () => {
      expect(fizzBuzz(10)).toEqual('Buzz');
    });
    it('should give "Buzz" for 20', () => {
      expect(fizzBuzz(20)).toEqual('Buzz');
    });
  });
  describe('fizzBuzzes numbers', () => {
    it('should give "FizzBuzz" for 15', () => {
      expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
    it('should give "FizzBuzz" for 30', () => {
      expect(fizzBuzz(30)).toEqual('FizzBuzz');
    });
    it('should give "FizzBuzz" for 45', () => {
      expect(fizzBuzz(45)).toEqual('FizzBuzz');
    });
  });
});
