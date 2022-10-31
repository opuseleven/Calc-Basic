import { Dispatch, SetStateAction } from 'react';

function handleNegativeClick(negative: boolean, viewedNumber: number,
  setNegative: Dispatch<SetStateAction<boolean>>, setViewedNumber: Dispatch<SetStateAction<number>>) {

  if (viewedNumber === 0) {
    setNegative(!negative);
  } else {
    const newValue: number = viewedNumber * -1;
    setViewedNumber(newValue);
  }
}
export { handleNegativeClick };
