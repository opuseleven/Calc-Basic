import { Dispatch, SetStateAction } from 'react';

function handleClearClick(viewedNumber: number, sign: string,
  setViewedNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  setSign: Dispatch<SetStateAction<string>>,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>) {

  if (viewedNumber !== 0) {
    setViewedNumber(0);
  } else {
    if (sign.length > 0) {
      setSign("");
    } else {
      setStoredNumber(0);
    }
  }
  setNegative(false);
  setDecimal(false);
}
export { handleClearClick };
