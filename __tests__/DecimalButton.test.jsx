import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DecimalButton } from '../components';

describe('Decimal Button Component', () => {
  it('Renders', () => {
    render(<DecimalButton />);
    expect(screen.getByRole('button')).toHaveTextContent('.');
  })
})
