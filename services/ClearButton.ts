function handleClearClick(viewedNumber: number, sign: string,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>, setStoredNumber: React.Dispatch<React.SetStateAction<number>>,
  setSign: React.Dispatch<React.SetStateAction<string>>) {

  if (viewedNumber !== 0) {
    setViewedNumber(0);
  } else {
    if (sign.length > 0) {
      setSign("");
    } else {
      setStoredNumber(0);
    }
  }

}
export { handleClearClick };
