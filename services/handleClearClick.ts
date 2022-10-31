function handleClearClick(viewedNumber: number, sign: string,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>,
  setStoredNumber: React.Dispatch<React.SetStateAction<number>>,
  setSign: React.Dispatch<React.SetStateAction<string>>,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setDecimal: React.Dispatch<React.SetStateAction<boolean>>) {

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
