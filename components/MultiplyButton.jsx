import styles from '../styles/Components.module.css';

function MultiplyButton({ handleClick }) {

  return (
    <div className={styles.multiplybutton}>
      <button className={styles.signbutton} onClick={handleClick}>x</button>
    </div>
  )
}
export { MultiplyButton };
