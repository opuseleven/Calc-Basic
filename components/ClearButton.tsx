import styles from '../styles/Components.module.css';

interface ClearButtonProps {
  handleClick: VoidFunction
}

const ClearButton: React.FC<ClearButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.clearbuttoncontainer}>
      <button className={styles.clearbutton} onClick={handleClick}>Clear</button>
    </div>
  )
}
export { ClearButton };
