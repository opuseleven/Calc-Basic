import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DivideButton } from '../components';

describe('Divide Button Component', () => {
  it('Renders', () => {
    render(<DivideButton />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
  })
})
