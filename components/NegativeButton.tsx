import styles from '../styles/Components.module.css';
import { FC, Dispatch, SetStateAction } from 'react';
import { handleNegativeClick } from '../services';

interface NegativeButtonProps {
  negative: boolean,
  viewedNumber: number,
  setNegative: Dispatch<SetStateAction<boolean>>,
  setViewedNumber: Dispatch<SetStateAction<number>>
}

const NegativeButton: FC<NegativeButtonProps> =
  ({ negative, viewedNumber, setNegative, setViewedNumber }) => {

  function handleClick() {
    handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber);
  }

  return (
    <div className={styles.negativebutton}>
      <button className={styles.bluebutton} onClick={() => handleClick()}>
        +/-
      </button>
    </div>
  )
}
export { NegativeButton };
