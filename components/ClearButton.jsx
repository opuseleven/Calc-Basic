import styles from '../styles/Components.module.css';

function ClearButton({ handleClick }) {

  return (
    <div className={styles.clearbuttoncontainer}>
      <button className={styles.clearbutton} onClick={handleClick}>Clear</button>
    </div>
  )
}
export { ClearButton };
