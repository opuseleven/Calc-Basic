import styles from '../styles/Components.module.css';

function AddButton({ handleClick }) {

  return (
    <div className={styles.addbutton}>
      <button className={styles.button} onClick={handleClick}>+</button>
    </div>
  )
}
export { AddButton };
