import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EqualsButton } from '../components';

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
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber} setViewedNumber={setViewedNumber}
      setNegative={setNegative} setDecimal={setDecimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('=');
  })

  it('Functions to pass data to evaluate()', () => {
    setStoredNumber(5);
    setSign("+");
    setViewedNumber(4);
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber} setViewedNumber={setViewedNumber}
      setNegative={setNegative} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(viewedNumber).toBe(9);
    expect(storedNumber).toBe(0);
    expect(sign).toBe("");
  })

  it('Functions to check for sign', () => {
    setViewedNumber(7);
    setSign("");
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber} setViewedNumber={setViewedNumber}
      setNegative={setNegative} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(viewedNumber).toBe(7);
    expect(sign).toBe("");
  })

  it('Functions to handle edge cases', () => {
    setViewedNumber(7);
    setSign("");
    setNegative(true);
    setDecimal(true);
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber} setViewedNumber={setViewedNumber}
      setNegative={setNegative} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(viewedNumber).toBe(7);
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })
})
