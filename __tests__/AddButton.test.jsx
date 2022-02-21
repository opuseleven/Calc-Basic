import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddButton } from '../components';

describe('Add Button Component', () => {
  it('Renders', () => {
    render(<AddButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+');
  })
})
