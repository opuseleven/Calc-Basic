import { evaluate } from '.';
import { Dispatch, SetStateAction } from 'react';

function handleSignClick(viewedNumber: number, storedNumber: number, sign: string,
  newSign: string, setViewedNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>, setSign: Dispatch<SetStateAction<string>>,
  setNegative: Dispatch<SetStateAction<boolean>>, setDecimal: Dispatch<SetStateAction<boolean>>) {

  if (sign.length > 0) {
    setStoredNumber(evaluate(storedNumber, sign, viewedNumber))
  } else {
    setStoredNumber(viewedNumber);
  }
  setSign(newSign);
  setNegative(false);
  setDecimal(false);
  setViewedNumber(0);
}
export { handleSignClick };
