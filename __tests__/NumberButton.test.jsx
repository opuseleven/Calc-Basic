import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberButton } from '../components';

describe('Number Button Component', () => {

  let viewedNumber = 0;
  function setViewedNumber(num) {
    viewedNumber = num;
  }
  let negative = false;
  let decimal = false;

  it('Component renders', () => {
    render(<NumberButton number={7} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    expect(screen.getByRole('button')).toHaveTextContent('7');
  })

  it('Component functions to set viewedNumber', () => {
    render(<NumberButton number={4} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('4'));
    expect(viewedNumber).toBe(4);
  })

  it('Sets viewed number if decimal=true', () => {
    decimal = true;
    setViewedNumber(0);
    render(<NumberButton number={5} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('5'));
    expect(viewedNumber).toBe(.5)
  })

  it('Sets viewedNumber if negative=true', () => {
    decimal = false;
    negative = true;
    setViewedNumber(0);
    render(<NumberButton number={2} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('2'));
    expect(viewedNumber).toBe(-2);
  })
  
  it('Sets viewedNumber if both negative&decimal=true', () => {
    setViewedNumber(0);
    negative = true;
    decimal = true;
    render(<NumberButton number={8} viewedNumber={viewedNumber} setViewedNumber={setViewedNumber}
      negative={negative} decimal={decimal} />);
    fireEvent.click(screen.getByText('8'));
    expect(viewedNumber).toBe(-0.8);
  })
})
