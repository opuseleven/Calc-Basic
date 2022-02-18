function handleNumberClick(viewedNumber: number, newNumber: number) {
  let returnedNumber: number = 0;
  if (viewedNumber === 0) {
    returnedNumber = newNumber;
  } else {
    returnedNumber = (viewedNumber * 10) + newNumber;
  }
  return returnedNumber;
}
export { handleNumberClick };
