import { undefined } from './';

describe('undefined is not a function?', () => {
  test('it is now', () => {
    expect(typeof undefined).toBe('function');
  });
});
