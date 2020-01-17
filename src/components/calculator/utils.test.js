import { trimEndZeros, getResult } from './utils';

describe('trimEndZeros()', () => {
  it('should remove floating number 0s in the end', () => {
    expect(trimEndZeros('0.12000')).toBe('0.12');
    expect(trimEndZeros('0.000012000')).toBe('0.000012');
    expect(trimEndZeros('-82398293.000012000')).toBe('-82398293.000012');
  });

  it('should not remove 0s in the end for integer number', () => {
    expect(trimEndZeros('12000')).toBe('12000');
    expect(trimEndZeros('23012')).toBe('23012');
    expect(trimEndZeros('120003000')).toBe('120003000');
  });

  it('should not remove 0s if number does not end with 0', () => {
    expect(trimEndZeros('12000.021')).toBe('12000.021');
    expect(trimEndZeros('-0.23012')).toBe('-0.23012');
  });
});

describe('getResult()', () => {
  it('should handle integer operations', () => {
    expect(getResult({ cachedOperator: 'plus', cachedNumber: '3', currentNumber: '2' })).toEqual('5');
    expect(getResult({ cachedOperator: 'minus', cachedNumber: '23', currentNumber: '45' })).toEqual('-22');
    expect(getResult({ cachedOperator: 'multiply', cachedNumber: '13', currentNumber: '2' })).toEqual('26');
    expect(getResult({ cachedOperator: 'divide', cachedNumber: '88', currentNumber: '22' })).toEqual('4');
  });

  it('should handle floating number operations', () => {
    expect(getResult({ cachedOperator: 'plus', cachedNumber: '.1', currentNumber: '0.2' })).toEqual('0.3');
    expect(getResult({ cachedOperator: 'minus', cachedNumber: '23.1', currentNumber: '45.0' })).toEqual('-21.9');
    expect(getResult({ cachedOperator: 'multiply', cachedNumber: '4.4', currentNumber: '2' })).toEqual('8.8');
    expect(getResult({ cachedOperator: 'divide', cachedNumber: '8.8', currentNumber: '1.3' })).toEqual('6.76923077');
  });

  it('should return "overflow" if number is too large or too small', () => {
    expect(getResult({ cachedOperator: 'plus', cachedNumber: '123456789', currentNumber: '1234567890' })).toEqual(
      'overflow'
    );
    expect(
      getResult({ cachedOperator: 'minus', cachedNumber: '0.00000000065', currentNumber: '0.00000000012' })
    ).toEqual('overflow');
  });
});
