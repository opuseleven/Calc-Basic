import styles from '../styles/Components.module.css';

function DivideButton({ handleClick }) {

  return (
    <div className={styles.dividebutton}>
      <button className={styles.button} onClick={handleClick}>/</button>
    </div>
  )
}
export { DivideButton };
