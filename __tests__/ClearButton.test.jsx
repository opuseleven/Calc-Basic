import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClearButton } from '../components';

describe('ClearButton Component', () => {
  it('Renders', () => {
    render(<ClearButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Clear');
  })
})
