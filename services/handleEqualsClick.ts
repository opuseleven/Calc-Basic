import { evaluate } from '.';
import { Dispatch, SetStateAction } from 'react';

function handleEqualsClick(storedNumber: number, viewedNumber: number, sign: string,
  setSign: Dispatch<SetStateAction<string>>, setStoredNumber: Dispatch<SetStateAction<number>>,
  setViewedNumber: Dispatch<SetStateAction<number>>, setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>) {

  let total: number;

  if (sign.length < 1) {
    total = viewedNumber;
  } else {
    total = evaluate(storedNumber, sign, viewedNumber);
  }

  setStoredNumber(0);
  setSign("");
  setNegative(false);
  setDecimal(false);
  setViewedNumber(total);
}
export { handleEqualsClick };
