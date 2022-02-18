import styles from '../styles/Components.module.css';

function NumberButton({ number }) {

  const numberstring = String(number);

  return (
    <div className={styles[`button${numberstring}`]}>
      <button className={styles.button}>{number}</button>
    </div>
  )
}
export { NumberButton };
