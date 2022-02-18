import styles from '../styles/Components.module.css';

function ZeroButton({ handleClick }) {

  return (
    <div className={styles.zerobutton}>
      <button className={styles.button} onClick={handleClick}>0</button>
    </div>
  )
}
export { ZeroButton };
