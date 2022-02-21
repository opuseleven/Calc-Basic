import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NegativeButton } from '../components';

describe('Negative Button Component', () => {
  it('Renders', () => {
    render(<NegativeButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+/-');
  })
})
