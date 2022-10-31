import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DivideButton } from '../components';

describe('Divide Button Component', () => {

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
  function setNegative(bool) {
    // do nothing
  }
  function setDecimal(bool) {
    // do nothing
  }

  it('Component renders', () => {
    render(<DivideButton viewedNumber={viewedNumber} storedNumber={storedNumber}
      sign={sign} setSign={setSign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setNegative={setNegative}
      setDecimal={setDecimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
  })

  it('Component functions to set sign var', () => {
    render(<DivideButton viewedNumber={viewedNumber} storedNumber={storedNumber}
      sign={sign} setSign={setSign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setNegative={setNegative}
      setDecimal={setDecimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
    act(() => {
      fireEvent.click(screen.getByText('/'));
    })
    expect(sign).toBe('/');
  })

  it('Component functions to store viewed number, and set viewedNumber to 0', () => {
    setStoredNumber(0);
    setViewedNumber(8);
    setSign('');
    render(<DivideButton viewedNumber={viewedNumber} storedNumber={storedNumber}
      sign={sign} setSign={setSign} setViewedNumber={setViewedNumber}
      setStoredNumber={setStoredNumber} setNegative={setNegative}
      setDecimal={setDecimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
    act(() => {
      fireEvent.click(screen.getByText('/'));
    })
    expect(sign).toBe('/');
    expect(storedNumber).toBe(8);
    expect(viewedNumber).toBe(0);
  })
})
