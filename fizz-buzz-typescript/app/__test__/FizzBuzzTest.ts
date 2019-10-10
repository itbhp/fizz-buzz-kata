function fizzBuzz(n: number): string {
  if (n === 3 || n === 6) {
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
  it('should give "Fizz" for 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });
  it('should give "Fizz" for 6', () => {
    expect(fizzBuzz(6)).toEqual('Fizz');
  });
});
