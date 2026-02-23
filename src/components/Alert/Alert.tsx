import styles from './Alert.module.css'

type AlertProps = {
  error: string
}

const Alert = ({ error }: AlertProps) => {
  return (
    <div className={styles.alertContainer}>
      {error}
    </div>
  )
}

export default Alert