import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiplyButton } from '../components';

describe('Multiply Button Component', () => {
  it('Renders', () => {
    render(<MultiplyButton />);
    expect(screen.getByRole('button')).toHaveTextContent('x');
  })
})
