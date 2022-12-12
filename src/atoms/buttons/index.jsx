import styles from './buttons.module.css'

export const PrimaryButton = ({ children }) => {
  return (
    <button 
      className={`${styles.button} ${styles.PrimaryButton}`}
    >
      { children }
    </button>
  )
}

export const SecondaryButton = ({ children }) => {
  return (
    <button 
      className={`${styles.button} ${styles.SecondaryButton}`}
    >
      { children }
    </button>
  )
}
