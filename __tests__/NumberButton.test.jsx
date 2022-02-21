import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberButton } from '../components';

describe('Number Button Component', () => {
  it('Renders', () => {
    render(<NumberButton number={7} />);
    expect(screen.getByRole('button')).toHaveTextContent('7');
  })
})
