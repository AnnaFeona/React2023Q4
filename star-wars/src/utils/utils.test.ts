import { transformInputValue } from '.';

describe('utils', () => {
  it('transform input value', () => {
    expect(transformInputValue('test value')).toEqual(['test', 'value']);
    expect(transformInputValue('   test   ')).toEqual(['test']);
    expect(transformInputValue('   test   value   ')).toEqual(['test', 'value']);
  });
});
