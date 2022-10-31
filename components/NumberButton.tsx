import styles from '../styles/Components.module.css';
import { handleNumberClick } from '../services';
import { FC, Dispatch, SetStateAction } from 'react';

interface NumberButtonProps {
  number: number,
  viewedNumber: number,
  setViewedNumber: Dispatch<SetStateAction<number>>,
  negative: boolean,
  decimal: boolean
}

const NumberButton: FC<NumberButtonProps> =
  ({ number, viewedNumber, setViewedNumber, negative, decimal }) => {

  const numberstring = String(number);

  function handleClick() {
    setViewedNumber(handleNumberClick(viewedNumber, number, negative, decimal))
  }

  return (
    <div className={styles[`button${numberstring}`]}>

      <button className={styles.button} onClick={handleClick}>
        {number}
      </button>
      
    </div>
  )
}
export { NumberButton };
