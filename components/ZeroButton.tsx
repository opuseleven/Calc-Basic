import styles from '../styles/Components.module.css';
import { handleNumberClick } from '../services';
import { FC, Dispatch, SetStateAction } from 'react';

interface ZeroButtonProps {
  viewedNumber: number,
  negative: boolean,
  decimal: boolean,
  setViewedNumber: Dispatch<SetStateAction<number>>
}

const ZeroButton: FC<ZeroButtonProps> =
  ({ viewedNumber, negative, decimal, setViewedNumber }) => {

  function handleClick() {
    setViewedNumber(handleNumberClick(viewedNumber, 0, negative, decimal));
  }

  return (
    <div className={styles.zerobutton}>

      <button className={styles.button} onClick={() => handleClick()}>
        0
      </button>

    </div>
  )
}
export { ZeroButton };
