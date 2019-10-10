function fizzBuzz(n: number): string {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  return `${n}`;
}

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
    it('should give "Buzz" for 30', () => {
      expect(fizzBuzz(30)).toEqual('FizzBuzz');
    });
    it('should give "Buzz" for 45', () => {
      expect(fizzBuzz(45)).toEqual('FizzBuzz');
    });
  });
});
