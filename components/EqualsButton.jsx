import styles from '../styles/Components.module.css';

function EqualsButton({ handleClick }) {

  return (
    <div className={styles.equalsbuttoncontainer}>
      <button className={styles.equalsbutton} onClick={handleClick}>=</button>
    </div>
  )
}
export { EqualsButton };
