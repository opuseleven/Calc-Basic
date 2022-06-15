import styles from '../styles/Components.module.css';

interface NegativeButtonProps {
  handleClick: VoidFunction
}

const NegativeButton: React.FC<NegativeButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.negativebutton}>
      <button className={styles.bluebutton} onClick={handleClick}>+/-</button>
    </div>
  )
}
export { NegativeButton };
