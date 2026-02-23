import type { Facet } from '../../types'
import styles from './FacetBar.module.css'

type FacetBarProps = {
  facets: Facet[],
  selectedHolidayType: string,
  selectedProductType: string,
  onHolidayChange: (value: string) => void,
  onProductChange: (value: string) => void,
}

const FacetBar = ({
  facets,
  selectedHolidayType,
  selectedProductType,
  onHolidayChange,
  onProductChange
}: FacetBarProps) => {
  const holidayFacet = facets.find((facet) => facet.key === 'HolidayType')
  const productFacet = facets.find((facet) => facet.key === 'ProductType')

  return (
    <nav className={styles.facetNav}>
      <div className={styles.facetContainer}>
        <label htmlFor='holiday' className={styles.facetLabel}>Holiday Type:</label>
        <select
          id='holiday'
          className={styles.facetSelect}
          value={selectedHolidayType}
          onChange={(e) => onHolidayChange(e.target.value)}
        >
          <option value=''>All Holiday Types</option>
          {holidayFacet?.items.map((item) => (
            <option key={item.key} value={item.key}>
              {item.key}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.facetContainer}>
        <label htmlFor='product' className={styles.facetLabel}>Product Type:</label>
        <select
          id='product'
          className={styles.facetSelect}
          value={selectedProductType}
          onChange={(e) => onProductChange(e.target.value)}
        >
          <option value=''>All Product Types</option>
          {productFacet?.items.map((item) => (
            <option key={item.key} value={item.key}>
              {item.key}
            </option>
          ))}
        </select>
      </div>
    </nav>
  )
}

export default FacetBar