import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClearButton } from '../components';

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

  it('Component clears Negative & Decimal booleans', () => {
    setNegative(true);
    setDecimal(true);
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative}
      setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })

  it('Component functions', () => {
    setViewedNumber(4);
    setNegative(true);
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative}
      setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(viewedNumber).toBe(0);
    expect(negative).toBe(false);
  })
  it('Component clears sign values', () => {
    setSign('+');
    setStoredNumber(9);
    setViewedNumber(0);
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative}
      setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(sign).toBe('');
    expect(storedNumber).toBe(9);
  })
})
