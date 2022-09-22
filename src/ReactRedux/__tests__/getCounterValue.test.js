import { getCounterValue } from '../reducers/getCounterValue';

describe('getCounterValue', () => {

  it('work with empty state', () => {
    expect(getCounterValue({})).toBe(0);
  });

  it('work with filled state', () => {
    expect(getCounterValue({ counter: { value: 100}})).toBe(100);
  });
})