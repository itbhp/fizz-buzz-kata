import { just, Just, none } from "../../../source/fp/types/Maybe";

describe('Maybe', () => {
  it('has smart constructor for just', () => {
    expect(just('Type')).toEqual(new Just('Type'))
  });

  it('has functor api', () => {
    expect(just(3).map(n => `${n}`)).toEqual(just('3'))
  });

  it('has monad api', () => {
    expect(just(3).flatMap(n => n % 3 == 0 ? just('Odd') : none())).toEqual(just('Odd'))
    expect(just(4).flatMap(n => n % 3 == 0 ? just('Odd') : none())).toEqual(none())
  });

  it('has fold api', () => {
    expect(just(3).fold(() => 'empty', (n:number) => `value ${n}`)).toEqual('value 3')
    expect(none().fold(() => 'empty', (n:number) => `value ${n}`)).toEqual('empty')
  });

  it('has fold without mapping api', () => {
    expect(just(3).orElse(0)).toEqual(3)
    expect(none().orElse(1)).toEqual(1)
  });
})