import styles from './FacetBar.module.css'

type FacetBarSkeletonProps = {
  selectedHolidayType: string;
  selectedProductType: string;
}

const FacetBarSkeleton = ({
  selectedHolidayType,
  selectedProductType
}: FacetBarSkeletonProps) => {
  return (
    <div className={styles.facetContainer}>
      <div className={styles.facetWrapper}>
        <span className={styles.facetLabel}>Filter By:</span>
        <div className={styles.selectWrapper}>
          <select
            className={styles.facetSelect}
            value=''
          >
            <option value=''>{selectedHolidayType}</option>
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <select
            className={styles.facetSelect}
            value=''
          >
            <option value=''>{selectedProductType}</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FacetBarSkeleton