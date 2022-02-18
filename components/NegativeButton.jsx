import styles from '../styles/Components.module.css';

function NegativeButton({ handleClick }) {

  return (
    <div className={styles.negativebutton}>
      <button className={styles.button} onClick={handleClick}>+/-</button>
    </div>
  )
}
export { NegativeButton };
