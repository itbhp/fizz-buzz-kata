function fizzBuzz(n: number): string {
  if (n === 2) {
    return '2';
  }
  return '1';
}

describe('FizzBuzz Kata', () => {
  it('should give "1" for 1', () => {
    expect(fizzBuzz(1)).toEqual('1');
  });

  it('should give "2" for 2', () => {
    expect(fizzBuzz(2)).toEqual('2');
  });
});
