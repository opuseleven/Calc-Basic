function handleNumberClick(viewedNumber: number, newNumber: number, negative: boolean,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>) {

  let returnedNumber: number = 0;

  if (viewedNumber === 0) {
    if (negative) {
      returnedNumber = newNumber * -1;
    } else {
      returnedNumber = newNumber;
    }
  } else {
    if (negative) {
      returnedNumber = (viewedNumber * 10) - newNumber;
    } else {
      returnedNumber = (viewedNumber * 10) + newNumber;
    }
  }
  return returnedNumber;
}
export { handleNumberClick };
