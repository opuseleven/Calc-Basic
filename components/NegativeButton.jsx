import styles from '../styles/Components.module.css';

function NegativeButton({ handleClick }) {

  return (
    <div className={styles.negativebutton}>
      <button className={styles.bluebutton} onClick={handleClick}>+/-</button>
    </div>
  )
}
export { NegativeButton };
