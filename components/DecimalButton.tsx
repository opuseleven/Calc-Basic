import styles from '../styles/Components.module.css';
import { handleDecimalClick } from '../services';
import { FC, Dispatch, SetStateAction } from 'react';

interface DecimalButtonProps {
  viewedNumber: number,
  decimal: boolean,
  setDecimal: Dispatch<SetStateAction<boolean>>
}

const DecimalButton: FC<DecimalButtonProps> =
  ({ viewedNumber, decimal, setDecimal }) => {

  function handleClick() {
    handleDecimalClick(viewedNumber, decimal, setDecimal);
  }

  return (
    <div className={styles.decimalbutton}>

      <button className={styles.bluebutton} onClick={() => handleClick()}>
         . 
      </button>

    </div>
  )
}
export { DecimalButton };
