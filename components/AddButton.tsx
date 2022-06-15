import styles from '../styles/Components.module.css';

interface AddButtonProps {
  handleClick: VoidFunction
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.addbutton}>
      <button className={styles.signbutton} onClick={handleClick}>+</button>
    </div>
  )
}
export { AddButton };