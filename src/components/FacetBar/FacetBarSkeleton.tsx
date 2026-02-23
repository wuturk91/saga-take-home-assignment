import styles from './FacetBar.module.css'

const FacetBarSkeleton = () => {
  return (
    <nav className={styles.facetNav}>
      <div className={styles.facetContainer}>
        <label htmlFor='holiday' className={styles.facetLabel}>Holiday Type:</label>
        <select
          id='holiday'
          className={styles.facetSelect}
          defaultValue='All Holiday Types'
        >
          <option>All Holiday Types</option>
        </select>
      </div>

      <div className={styles.facetContainer}>
        <label htmlFor='product' className={styles.facetLabel}>Product Type:</label>
        <select
          id='product'
          className={styles.facetSelect}
          defaultValue='All Product Types'
        >
          <option>All Product Types</option>
        </select>
      </div>
    </nav>
  )
}

export default FacetBarSkeleton