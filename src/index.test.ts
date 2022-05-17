import { sum } from './index';

describe('When adding two numbers', () => {
  it('should return the sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
