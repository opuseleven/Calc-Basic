import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EqualsButton } from '../components';
import { handleEqualsClick } from '../services';

describe('Equals Button Component', () => {

  let storedNumber = 0;
  function setStoredNumber(n) {
    storedNumber = n;
  }
  let viewedNumber = 0;
  function setViewedNumber(n) {
    viewedNumber = n;
  }
  let sign = "";
  function setSign(s) {
    sign = s;
  }
  let negative = false;
  function setNegative(bool) {
    negative = bool;
  }
  let decimal = false;
  function setDecimal(bool) {
    decimal = bool;
  }

  it('Renders', () => {
    render(<EqualsButton />);
    expect(screen.getByRole('button')).toHaveTextContent('=');
  })

  it('Passes data to evaluate()', () => {
    storedNumber = 5;
    sign = "+";
    viewedNumber = 4;
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(9);
    expect(storedNumber).toBe(0);
    expect(sign).toBe("");
  })

  it('Checks for sign', () => {
    viewedNumber = 7;
    sign = "";
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(7);
    expect(sign).toBe("");
  })

  it('Handles edge cases', () => {
    viewedNumber = 7;
    sign = "";
    negative = true;
    decimal = true;
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
    expect(viewedNumber).toBe(7);
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })
})
