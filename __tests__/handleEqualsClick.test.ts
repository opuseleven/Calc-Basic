import { handleEqualsClick } from '../services';

describe('handleEqualsClick service', () => {

  let viewedNumber = 0;
  function setViewedNumber(num: number) {
    viewedNumber = num;
  }
  let storedNumber = 0;
  function setStoredNumber(num: number) {
    storedNumber = num;
  }
  let sign = '';
  function setSign(s: string) {
    sign = s;
  }
  let negative = false;
  function setNegative(bool: boolean) {
    negative = bool;
  }
  let decimal = false;
  function setDecimal(bool: boolean) {
    decimal = bool;
  }

  it('Functions to pass data to evaluate()', () => {
    setViewedNumber(40);
    setStoredNumber(29);
    setSign('+');
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(storedNumber).toBe(0);
    expect(viewedNumber).toBe(69);
    expect(sign).toBe('');
  })

  it('Resets sign, negative, and decimal vars back to default', () => {
    setViewedNumber(-3);
    setStoredNumber(2);
    setSign('*');
    setDecimal(true);
    setNegative(true);
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(-6);
    expect(sign).toBe('');
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })

  it('Functions to check for sign', () => {
    setSign('');
    setViewedNumber(-8);
    setNegative(true);
    setDecimal(true);
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(-8);
    expect(sign).toBe('');
  })

  it('Functions to handle edge cases', () => {
    setViewedNumber(7);
    setSign('');
    setNegative(true);
    setDecimal(true);
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(7);
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })
})
