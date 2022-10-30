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

  it('Component renders', () => {
    render(<ClearButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Clear');
  })
  it('Functions work', () => {
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
  it('Component functions', () => {
    setViewedNumber(4);
    setNegative(true);
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative}
      setDecimal={setDecimal} />);
    fireEvent.click(screen.getByRole('button'));
    expect(viewedNumber).toBe(0);
    expect(negative).toBe(false);
  })
})
