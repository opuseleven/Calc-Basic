import styles from '../styles/Components.module.css';
import { handleSignClick } from '../services';
import { FC, Dispatch, SetStateAction } from 'react';

interface MultiplyButtonProps {
  viewedNumber: number,
  storedNumber: number,
  sign: string,
  setViewedNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  setSign: Dispatch<SetStateAction<string>>,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>
}

const MultiplyButton: FC<MultiplyButtonProps> =
  ({ viewedNumber, storedNumber, sign, setViewedNumber, setStoredNumber, setSign,
    setNegative, setDecimal }) => {

  function handleClick() {
    handleSignClick(viewedNumber, storedNumber, sign, "*", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
  }

  return (
    <div className={styles.multiplybutton}>

      <button className={sign === '*' ? styles.selectedsignbutton : styles.signbutton}
        onClick={() => handleClick()}
      >
        x
      </button>

    </div>
  )
}
export { MultiplyButton };
