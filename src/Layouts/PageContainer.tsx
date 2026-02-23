import styles from './PageContainer.module.css'

type PageContainerProps = {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  )
}

export default PageContainer