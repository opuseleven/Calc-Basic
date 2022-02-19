import styles from '../styles/Components.module.css';

function ViewScreen({ number }) {

  return (
    <div className={styles.viewscreen}>
      <h2 className={styles.viewednumberheader}>
        {number}
      </h2>
    </div>
  )
}
export { ViewScreen };
