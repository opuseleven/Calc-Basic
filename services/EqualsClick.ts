import { evaluate } from '.';

function handleEqualsClick(storedNumber: number, viewedNumber: number, sign: string, setSign: React.Dispatch<React.SetStateAction<string>>,
  setStoredNumber: React.Dispatch<React.SetStateAction<number>>, setViewedNumber: React.Dispatch<React.SetStateAction<number>>,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>) {

  const total: number = evaluate(storedNumber, sign, viewedNumber);

  setStoredNumber(0);
  setSign("");
  setNegative(false);
  setViewedNumber(total);
}
export { handleEqualsClick };
