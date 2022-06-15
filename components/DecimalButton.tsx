import styles from '../styles/Components.module.css';

interface DecimalButtonProps {
  handleClick: VoidFunction
}

const DecimalButton: React.FC<DecimalButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.decimalbutton}>
      <button className={styles.bluebutton} onClick={handleClick}>.</button>
    </div>
  )
}
export { DecimalButton };
