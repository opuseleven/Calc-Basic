import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home', () => {

  it('Renders calculator', () => {
    render(<Home />);

    const results = screen.getByRole('heading', {
      name: 0
    });
  });

  it('1 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });

  it('2 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });

  it('3 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('3');
  });

  it('4 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('4'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('4');
  });

  it('5 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5');
  });

  it('6 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('6'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('6');
  });

  it('7 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('7'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('7');
  });

  it('8 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('8'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('8');
  });

  it('9 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('9'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('9');
  });

  it('0 Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getAllByRole('button')[15]);
    })
    expect(screen.getByRole('heading')).toHaveTextContent('10');
  });

  it('Clear Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    act(() => {
      fireEvent.click(screen.getByText('Clear'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });

  it('Decimal Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1.5');
  });

  it('Negative Button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    act(() => {
      fireEvent.click(screen.getByText('+/-'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('-1');
  });

  it('Add button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5');
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('7');
  })

  it('Subtract button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('3');
    act(() => {
      fireEvent.click(screen.getByText('-'));
    })
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  })

  it('Divide button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('8'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('8');
    act(() => {
      fireEvent.click(screen.getByText('/'));
    })
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('4');
  })

  it('Multiply button functions', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('7'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('7');
    act(() => {
      fireEvent.click(screen.getByText('x'));
    })
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('21');
  })

  it('Found a bug with decimal subtraction?', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5')
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5.3');
    act(() => {
      fireEvent.click(screen.getByText('-'));
    })
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('0.3');
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5');
  })

  it('Another bug with decimal', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('0.15');
  })

  it('Decimal works with three digits', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('.123');
  })

  it('Decimal works with four digits', () => {
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    act(() => {
      fireEvent.click(screen.getByText('4'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('.1234');
  })
})
