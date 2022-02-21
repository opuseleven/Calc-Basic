import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubtractButton } from '../components';

describe('Subtract Button Component', () => {
  it('Renders', () => {
    render(<SubtractButton />);
    expect(screen.getByRole('button')).toHaveTextContent('-');
  })
})
