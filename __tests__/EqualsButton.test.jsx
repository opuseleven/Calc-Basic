import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EqualsButton } from '../components';

describe('Equals Button Component', () => {
  it('Renders', () => {
    render(<EqualsButton />);
    expect(screen.getByRole('button')).toHaveTextContent('=');
  })
})
