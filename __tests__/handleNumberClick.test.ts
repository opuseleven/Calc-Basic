import { handleNumberClick } from '../services';

describe('Number Services', () => {

  let testNumber = 0;

  it('Adds first number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, false);
    expect(testNumber).toBe(2);
  })

  it('Adds a seconds clicked number to first number', () => {
    testNumber = handleNumberClick(2, 4, false, false);
    expect(testNumber).toBe(24);
  })

  it('Adds a third number', () => {
    testNumber = handleNumberClick(22, 3, false, false);
    expect(testNumber).toBe(223);
  })

  it('Adds a fourth number', () => {
    testNumber = handleNumberClick(223, 8, false, false);
    expect(testNumber).toBe(2238);
  })

  it('Adds a fifth number', () => {
    testNumber = handleNumberClick(2238, 4, false, false);
    expect(testNumber).toBe(22384);
  })

  it('Adds a sixth number', () => {
    testNumber = handleNumberClick(22384, 7, false, false);
    expect(testNumber).toBe(223847);
  })

  it('Adds a negative number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, false);
    expect(testNumber).toBe(-2);
  })

  it('Adds a second number to a negative number', () => {
    testNumber = handleNumberClick(-2, 2, true, false);
    expect(testNumber).toBe(-22);
  })

  it('Adds a decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, true);
    expect(testNumber).toBe(.2);
  })

  it('Adds a second clicked number to the first decimal number', () => {
    testNumber = handleNumberClick(.2, 2, false, true);
    expect(testNumber).toBe(.22);
  })

  it('Adds a second clicked number to the first non-decimal number', () => {
    testNumber = handleNumberClick(1, 5, false, true);
    expect(testNumber).toBe(1.5);
  })

  it('Adds a negative decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, true);
    expect(testNumber).toBe(-.2);
  })

  it('Adds a second clicked number to the first negative decimal number', () => {
    testNumber = handleNumberClick(-.2, 2, true, true);
    expect(testNumber).toBe(-.22);
  })

  it('Adds a second clicked number to the first negative non-decimal number', () => {
    testNumber = handleNumberClick(-2, 2, true, true);
    expect(testNumber).toBe(-2.2);
  })

  it('Does not break with additional decimal places', () => {
    testNumber = handleNumberClick(1.2, 5, false, true);
    expect(testNumber).toBe(1.25);
  })

  it('Does not break with additional negative decimal places', () => {
    testNumber = handleNumberClick(-1.2, 5, true, true);
    expect(testNumber).toBe(-1.25);
  })
})
