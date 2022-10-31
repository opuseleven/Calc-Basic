import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubtractButton } from '../components';

describe('Subtract Button Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(num) {
    viewedNumber = num;
  }
  let storedNumber = 0;
  function setStoredNumber(num) {
    storedNumber = num;
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

  it('Component renders', () => {
    render(<SubtractButton />);
    expect(screen.getByRole('button')).toHaveTextContent('-');
  })
  it('Component functions to set sign var', () => {
    render(<SubtractButton viewedNumber={viewedNumber} storedNumber={storedNumber}
      sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
      setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    fireEvent.click(screen.getByText('-'));
    expect(sign).toBe('-');
  })

  it('Component functions to store viewed number, and set viewedNumber to 0', () => {
    setViewedNumber(4);
    setSign('');
    render(<SubtractButton viewedNumber={viewedNumber} storedNumber={storedNumber}
      sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
      setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    fireEvent.click(screen.getByText('-'));
    expect(sign).toBe('-');
    expect(storedNumber).toBe(4);
    expect(viewedNumber).toBe(0);
  })
})
