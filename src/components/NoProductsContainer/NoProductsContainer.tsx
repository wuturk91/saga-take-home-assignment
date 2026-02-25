import styles from './NoProductsContainer.module.css'

const NoProductsContainer = () => {
  return (
    <div className={styles.noProductsContainer}>
      <h2>No holidays match your filters - please alter or restart your search</h2>
      <button
        type='button'
        aria-label='Reset search'
        className={styles.noProductsContainerButton}
        onClick={() => {
          window.location.href = 'http://localhost:5173';
        }}
      >
        Restart Search
      </button>
    </div>
  )
}

export default NoProductsContainer