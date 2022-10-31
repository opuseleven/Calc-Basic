import styles from '../styles/Components.module.css';
import { FC, Dispatch, SetStateAction } from 'react';
import { handleSignClick } from '../services';

interface AddButtonProps {
  viewedNumber: number,
  storedNumber: number,
  sign: string,
  setViewedNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  setSign: Dispatch<SetStateAction<string>>,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setDecimal: Dispatch<SetStateAction<boolean>>
}

const AddButton: FC<AddButtonProps> =
  ({ viewedNumber, storedNumber, sign, setViewedNumber, setStoredNumber, setSign,
    setNegative, setDecimal }) => {

  function handleClick() {
    handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)
  }

  return (
    <div className={styles.addbutton}>

      <button className={sign === '+' ? styles.selectedsignbutton : styles.signbutton}
        onClick={() => handleClick()}
      >
        +
      </button>

    </div>
  )
}
export { AddButton };
