import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DecimalButton } from '../components';

describe('Decimal Button Component', () => {

  let viewedNumber = 0;
  let decimal = false;
  function setDecimal(bool) {
    decimal = bool;
  }

  it('Comonent renders', () => {
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal}
      setDecimal={setDecimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('.');
  })

  it('Functions to set decimal var', () => {
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal}
      setDecimal={setDecimal} />);
    fireEvent.click(screen.getByText('.'));
    expect(decimal).toBe(true);
  })

  it('Functions to set decimal var back', () => {
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal}
      setDecimal={setDecimal} />);
    fireEvent.click(screen.getByText('.'));
    expect(decimal).toBe(false);
  })

  it('Handles edge cases', () => {
    decimal = true;
    viewedNumber = 2.5;
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal}
      setDecimal={setDecimal} />);
    fireEvent.click(screen.getByText('.'));
    expect(decimal).toBe(true);
  })

  it('Handles additional edge case', () => {
    decimal = true;
    viewedNumber = 2;
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal}
      setDecimal={setDecimal} />);
      fireEvent.click(screen.getByText('.'));
    expect(decimal).toBe(false);
  })
})
