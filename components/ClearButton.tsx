import styles from '../styles/Components.module.css';
import { handleClearClick } from '../services';
import { FC, Dispatch, SetStateAction } from 'react';

interface ClearButtonProps {
  viewedNumber: number
  sign: string
  setViewedNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  setSign: Dispatch<SetStateAction<string>>,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>
}

const ClearButton: FC<ClearButtonProps> = (
  {
    viewedNumber, sign, setViewedNumber, setStoredNumber,
    setSign, setNegative, setDecimal
  }) => {

  function handleClick() {
    handleClearClick(viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
  }

  return (
    <div className={styles.clearbuttoncontainer}>
      <button className={styles.clearbutton} onClick={() => handleClick()}>
        Clear
      </button>
    </div>
  )
}
export { ClearButton };
