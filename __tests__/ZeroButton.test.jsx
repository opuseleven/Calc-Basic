import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ZeroButton } from '../components';

describe('Zero Button Component', () => {
  it('Renders', () => {
    render(<ZeroButton />);
    expect(screen.getByRole('button')).toHaveTextContent('0');
  })
})
