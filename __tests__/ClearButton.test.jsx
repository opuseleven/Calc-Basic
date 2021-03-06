import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClearButton } from '../components';
import { handleClearClick } from '../services';

describe('ClearButton Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(n) {
    viewedNumber = n;
  }
  let storedNumber = 0;
  function setStoredNumber(n) {
    storedNumber = n;
  }
  let sign = "";
  function setSign(s) {
    sign =  s;
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
    render(<ClearButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Clear');
  })
  it('Functions', () => {
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
})
