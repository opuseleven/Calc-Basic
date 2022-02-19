import styles from '../styles/Components.module.css';

function DecimalButton({ handleClick }) {

  return (
    <div className={styles.decimalbutton}>
      <button className={styles.button} onClick={handleClick}>.</button>
    </div>
  )
}
export { DecimalButton };
