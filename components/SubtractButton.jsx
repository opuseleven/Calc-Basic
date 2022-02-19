import styles from '../styles/Components.module.css';

function SubtractButton({ handleClick }) {

  return (
    <div className={styles.subtractbutton}>
      <button className={styles.signbutton} onClick={handleClick}>-</button>
    </div>
  )
}
export { SubtractButton };
