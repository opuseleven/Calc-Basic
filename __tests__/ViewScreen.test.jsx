import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ViewScreen } from '../components';

describe('ViewScreen Component', () => {
  it('Renders', () => {
    render(<ViewScreen number={0} />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  })
})
