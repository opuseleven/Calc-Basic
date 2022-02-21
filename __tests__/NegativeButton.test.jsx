import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NegativeButton } from '../components';
import { handleNegativeClick } from '../services';

describe('Negative Button Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(n) {
    viewedNumber = n;
  }
  let negative = false;
  function setNegative(bool) {
    negative = bool;
  }

  it('Renders', () => {
    render(<NegativeButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+/-');
  })

  it('Sets Negative bool', () => {
    render(<NegativeButton handleClick={handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber)} />);
    fireEvent.click(screen.getByText("+/-"));
    expect(negative).toBe(true);
  })

  it('Sets value of viewed Number to negative', () => {
    viewedNumber = 3;
    negative = false;
    handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber);
    expect(viewedNumber).toBe(-3);
  })
})
