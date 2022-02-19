function handleNumberClick(viewedNumber: number, newNumber: number, negative: boolean,
  decimal: boolean) {

  let returnedNumber: number = 0;

  if (viewedNumber === 0) {
    if (negative) {
      if (decimal) {
        returnedNumber = (newNumber * .1) * -1;
      } else {
        returnedNumber = newNumber * -1;
      }
    } else {
      if (decimal) {
        returnedNumber = (newNumber * .1);
      } else {
        returnedNumber = newNumber;
      }
    }
  } else {
    if (negative) {
      if (decimal) {
        returnedNumber = viewedNumber - (newNumber * .1);
      } else {
        returnedNumber = (viewedNumber * 10) - newNumber;
      }
    } else {
      if (decimal) {
        returnedNumber = viewedNumber + (newNumber * .1);
      } else {
        returnedNumber = (viewedNumber * 10) + newNumber;
      }
    }
  }
  return returnedNumber;
}
export { handleNumberClick };
