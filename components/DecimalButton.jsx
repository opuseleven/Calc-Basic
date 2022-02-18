import styles from '../styles/Components.module.css';

function DecimalButton() {

  return (
    <div className={styles.decimalbutton}>
      <button className={styles.button}>.</button>
    </div>
  )
}
export { DecimalButton };
