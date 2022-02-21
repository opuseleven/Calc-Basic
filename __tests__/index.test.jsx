import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home', () => {
  it('Renders calculator and buttons work', () => {
    render(<Home />);

    const results = screen.getByRole('heading', {
      name: 0
    });

    fireEvent.click(screen.getByText('1'));
    expect(screen.getByRole('heading')).toHaveTextContent('1');

    fireEvent.click(screen.getByText('2'));
    expect(screen.getByRole('heading')).toHaveTextContent('12');

    fireEvent.click(screen.getByText('3'));
    expect(screen.getByRole('heading')).toHaveTextContent('123');

    fireEvent.click(screen.getByText('4'));
    expect(screen.getByRole('heading')).toHaveTextContent('1234');

    fireEvent.click(screen.getByText('5'));
    expect(screen.getByRole('heading')).toHaveTextContent('12345');

    fireEvent.click(screen.getByText('6'));
    expect(screen.getByRole('heading')).toHaveTextContent('123456');

    fireEvent.click(screen.getByText('7'));
    expect(screen.getByRole('heading')).toHaveTextContent('1234567');

    fireEvent.click(screen.getByText('8'));
    expect(screen.getByRole('heading')).toHaveTextContent('12345678');

    fireEvent.click(screen.getByText('9'));
    expect(screen.getByRole('heading')).toHaveTextContent('123456789');

    fireEvent.click(screen.getByText('0'));
    expect(screen.getByRole('heading')).toHaveTextContent('1234567890');

    fireEvent.click(screen.getByText('Clear'));
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  })
})
