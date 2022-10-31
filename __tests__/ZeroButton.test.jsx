import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ZeroButton } from '../components';

describe('Zero Button Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(num) {
    viewedNumber = num;
  }
  let negative = false;
  let decimal = false;

  it('Component renders', () => {
    render(<ZeroButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('0');
  })

  it('Component functions to set viewedNumber', () => {
    render(<ZeroButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('0'));
    expect(viewedNumber).toBe(0);
  })

  it('Sets viewed number if decimal=true', () => {
    decimal = true;
    setViewedNumber(1);
    render(<ZeroButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('0'));
    expect(viewedNumber).toBe(1.0)
  })

  it('Sets viewedNumber if negative=true', () => {
    decimal = false;
    negative = true;
    setViewedNumber(0);
    render(<ZeroButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('0'));
    expect(viewedNumber).toBe(-0);
  })

  it('Sets viewedNumber if both negative&decimal=true', () => {
    setViewedNumber(0);
    negative = true;
    decimal = true;
    render(<ZeroButton viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('0'));
    expect(viewedNumber).toBe(-0.0);
  })
})
