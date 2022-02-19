import { evaluate } from '.';

function handleEqualsClick(storedNumber: number, viewedNumber: number, sign: string, setSign: React.Dispatch<React.SetStateAction<string>>,
  setStoredNumber: React.Dispatch<React.SetStateAction<number>>, setViewedNumber: React.Dispatch<React.SetStateAction<number>>,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>, setDecimal: React.Dispatch<React.SetStateAction<boolean>>) {

  let total: number;

  if (sign.length < 1) {
    total = viewedNumber;
  } else {
    total = evaluate(storedNumber, sign, viewedNumber);
  }

  setStoredNumber(0);
  setSign("");
  setNegative(false);
  setDecimal(false);
  setViewedNumber(total);
}
export { handleEqualsClick };
