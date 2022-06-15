import styles from '../styles/Components.module.css';

interface EqualsButtonProps {
  handleClick: VoidFunction
}

const EqualsButton: React.FC<EqualsButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.equalsbuttoncontainer}>
      <button className={styles.equalsbutton} onClick={handleClick}>=</button>
    </div>
  )
}
export { EqualsButton };
