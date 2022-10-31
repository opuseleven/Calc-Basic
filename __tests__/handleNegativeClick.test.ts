import { handleNegativeClick } from '../services';

describe('handleNegativeClick service', () => {

  let viewedNumber = 0;
  function setViewedNumber(n: number) {
    viewedNumber = n;
  }
  let negative = false;
  function setNegative(bool: boolean) {
    negative = bool;
  }

  it('Sets value of viewedNumber to negative', () => {
    viewedNumber = 3;
    negative = false;
    handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber);
    expect(viewedNumber).toBe(-3);
  })
  
  it('Sets negative value of viewedNumber back to positive', () => {
    viewedNumber = -4;
    negative = false;
    handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber);
    expect(viewedNumber).toBe(4);
  })
})
