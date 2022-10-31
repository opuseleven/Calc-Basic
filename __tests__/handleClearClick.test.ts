import { handleClearClick } from '../services';

describe('handleClearClick service', () => {

  let viewedNumber = 0;
  function setViewedNumber(n: number) {
    viewedNumber = n;
  }
  let storedNumber = 0;
  function setStoredNumber(n: number) {
    storedNumber = n;
  }
  let sign = "";
  function setSign(s: string) {
    sign =  s;
  }
  let negative = false;
  function setNegative(bool: boolean) {
    negative = bool;
  }
  let decimal = false;
  function setDecimal(bool: boolean) {
    decimal = bool;
  }

  it('Function works to clear all values', () => {
    viewedNumber = 1;
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(viewedNumber).toBe(0);

    sign = "+";
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(sign).toBe("");

    storedNumber = 4;
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(0);
  })

  it('Clears Negative & Decimal booleans', () => {
    negative = true;
    decimal = true;
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })

  it('Clears sign value', () => {
    sign = "+";
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(sign).toBe('');
  })
})
