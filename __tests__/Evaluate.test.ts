import { evaluate } from '../services';

describe('Evaluate Function', () => {

  let total = 0;

  it('Adds', () => {
    total = evaluate(11, "+", 22);
    expect(total).toBe(33);
  })

  it('Subtracts', () => {
    total = evaluate(7, "-", 10.5);
    expect(total).toBe(-3.5);
  })

  it('Multiplies', () => {
    total = evaluate(7, "*", 3);
    expect(total).toBe(21);
  })

  it('Divides', () => {
    total = evaluate(100, "/", -20);
    expect(total).toBe(-5)
  })
})
