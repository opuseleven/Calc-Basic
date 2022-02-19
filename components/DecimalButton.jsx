import styles from '../styles/Components.module.css';

function DecimalButton({ handleClick }) {

  return (
    <div className={styles.decimalbutton}>
      <button className={styles.bluebutton} onClick={handleClick}>.</button>
    </div>
  )
}
export { DecimalButton };
