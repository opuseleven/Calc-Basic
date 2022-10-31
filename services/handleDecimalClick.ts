import { Dispatch, SetStateAction } from 'react';

function handleDecimalClick(viewedNumber: number, decimal: boolean,
  setDecimal: Dispatch<SetStateAction<boolean>>) {

  if (!decimal) {
    setDecimal(true);
  } else {
    if ((viewedNumber % 1) === 0) {
      setDecimal(false);
    }
  }
}
export { handleDecimalClick };
