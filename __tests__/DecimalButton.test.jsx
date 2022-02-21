import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DecimalButton } from '../components';
import { handleDecimalClick } from '../services';

describe('Decimal Button Component', () => {

  let viewedNumber = 0;
  let decimal = false;
  function setDecimal(bool) {
    decimal = bool;
  }

  it('Renders', () => {
    render(<DecimalButton />);
    expect(screen.getByRole('button')).toHaveTextContent('.');
  })

  it('Set Decimal function', () => {
    handleDecimalClick(viewedNumber, decimal, setDecimal);
    expect(decimal).toBe(true);
    handleDecimalClick(viewedNumber, decimal, setDecimal);
    expect(decimal).toBe(false);
  })
  it('Edge Case', () => {
    decimal = true;
    viewedNumber = 2.5;
    handleDecimalClick(viewedNumber, decimal, setDecimal);
    expect(decimal).toBe(true);
    viewedNumber = 2;
    handleDecimalClick(viewedNumber, decimal, setDecimal);
    expect(decimal).toBe(false);
  })
})
