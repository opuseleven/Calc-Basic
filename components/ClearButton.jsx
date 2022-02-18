import styles from '../styles/Components.module.css';

function ClearButton() {

  return (
    <div className={styles.clearbuttoncontainer}>
      <button className={styles.clearbutton}>Clear</button>
    </div>
  )
}
export { ClearButton };
