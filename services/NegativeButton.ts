function handleNegativeClick(negative: boolean, viewedNumber: number, setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>) {
  if (viewedNumber === 0) {
    setNegative(!negative);
  } else {
    const newValue: number = viewedNumber * -1;
    setViewedNumber(newValue);
  }
}
export { handleNegativeClick };
