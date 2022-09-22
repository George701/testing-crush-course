import counterReducer, { increment, decrement } from '../reducers/counterReducer'

describe('getCounterValue', () => {

  it('work with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({value: 1});
    expect(counterReducer(undefined, decrement())).toEqual({value: -1});
  });

  it('increment', () => {
    expect(counterReducer({value: 0}, increment())).toEqual({value: 1});
  });

  it('decrement', () => {
    expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
  });
})