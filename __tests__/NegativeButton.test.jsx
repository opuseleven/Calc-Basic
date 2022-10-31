import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NegativeButton } from '../components';

describe('Negative Button Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(n) {
    viewedNumber = n;
  }
  let negative = false;
  function setNegative(bool) {
    negative = bool;
  }

  it('Component renders', () => {
    render(<NegativeButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+/-');
  })

  it('Sets Negative bool', () => {
    render(<NegativeButton negative={negative} viewedNumber={viewedNumber}
      setNegative={setNegative} setViewedNumber={setViewedNumber} />);
    act(() => {
      fireEvent.click(screen.getByText("+/-"));
    })
    expect(negative).toBe(true);
  })

  it('Sets negative viewedNumber back to positive', () => {
    setNegative(false);
    setViewedNumber(-4);
    render(<NegativeButton negative={negative} viewedNumber={viewedNumber}
      setNegative={setNegative} setViewedNumber={setViewedNumber} />);
    act(() => {
      fireEvent.click(screen.getByText("+/-"));
    })
    expect(negative).toBe(false);
    expect(viewedNumber).toBe(4);
  })
})
