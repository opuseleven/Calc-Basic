import { handleDecimalClick } from '../services';

describe('handleDecimalClick service', () => {

  let decimal = false;
  function setDecimal(bool: boolean) {
    decimal = bool;
  }

  it('Sets decimal var to true', () => {
    handleDecimalClick(2, decimal, setDecimal);
    expect(decimal).toBe(true);
  })

  it('Checks that passed number is a whole number, decimal remains true', () => {
    setDecimal(true);
    handleDecimalClick(2.3, decimal, setDecimal);
    expect(decimal).toBe(true);
  })

  it('If decimal=true but passed num is whole number, decimal reverts to false', () => {
    setDecimal(true);
    handleDecimalClick(4, decimal, setDecimal);
    expect(decimal).toBe(false);
  })
})
