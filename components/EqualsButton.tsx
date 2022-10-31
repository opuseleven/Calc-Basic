import styles from '../styles/Components.module.css';
import { FC, Dispatch, SetStateAction } from 'react';
import { handleEqualsClick } from '../services';

interface EqualsButtonProps {
  storedNumber: number,
  viewedNumber: number,
  sign: string,
  setSign: Dispatch<SetStateAction<string>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  setViewedNumber: Dispatch<SetStateAction<number>>,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>
}

const EqualsButton: FC<EqualsButtonProps> =
  ({ storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber,
    setNegative, setDecimal }) => {

  function handleClick() {
    handleEqualsClick(storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal);
  }

  return (
    <div className={styles.equalsbuttoncontainer}>

      <button className={styles.equalsbutton} onClick={() => handleClick()}>
        =
      </button>

    </div>
  )
}
export { EqualsButton };
