import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiplyButton } from '../components';

describe('Multiply Button Component', () => {

  let viewedNumber = 8;
  function setViewedNumber(num){
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
    render(<MultiplyButton />);
    expect(screen.getByRole('button')).toHaveTextContent('x');
  })

  it('Component functions to set sign var', () => {
    render(<MultiplyButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      storedNumber={storedNumber} setStoredNumber={setStoredNumber} sign={sign}
      setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByText('x'));
    })
    expect(storedNumber).toBe(8);
    expect(sign).toBe('*');
    expect(viewedNumber).toBe(0);
  })

  it('Component functions to store viewed number, and set viewedNumber to 0', () => {
    setSign('');
    setViewedNumber(7);
    setStoredNumber(0);
    render(<MultiplyButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      storedNumber={storedNumber} setStoredNumber={setStoredNumber} sign={sign}
      setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByText('x'));
    })
    expect(storedNumber).toBe(7);
    expect(sign).toBe('*');
    expect(viewedNumber).toBe(0);
  })
})
