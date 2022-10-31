function handleDecimalClick(viewedNumber: number, decimal: boolean, setDecimal: React.Dispatch<React.SetStateAction<boolean>>) {
  if (!decimal) {
    setDecimal(true);
  } else {
    if ((viewedNumber % 1) === 0) {
      setDecimal(false);
    }
  }
}
export { handleDecimalClick };
