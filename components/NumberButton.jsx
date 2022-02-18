import styles from '../styles/Components.module.css';

function NumberButton({ number, handleClick }) {

  const numberstring = String(number);

  return (
    <div className={styles[`button${numberstring}`]}>
      <button className={styles.button} onClick={handleClick}>{number}</button>
    </div>
  )
}
export { NumberButton };
