import { useFacets } from '../../hooks/useFacets'
import FacetBarSkeleton from './FacetBarSkeleton'
import Alert from '../Alert/Alert'
import type { Facet } from '../../types'
import styles from './FacetBar.module.css'

type FacetBarProps = {
  selectedHolidayType: string;
  selectedProductType: string;
  onHolidayChange: (value: string) => void;
  onProductChange: (value: string) => void;
  productCount: string;
}

const FacetBar = ({
  selectedHolidayType,
  selectedProductType,
  onHolidayChange,
  onProductChange,
  productCount
}: FacetBarProps) => {
  const { facets, facetsLoading, error } = useFacets()

  const holidayFacet = facets.find((facet: Facet) => facet.key === 'HolidayType')
  const productFacet = facets.find((facet: Facet) => facet.key === 'ProductType')

  if (facetsLoading) return (
    <FacetBarSkeleton
      selectedHolidayType={selectedHolidayType}
      selectedProductType={selectedProductType}
    />
  )
  if (error) return <Alert error={error} />

  return (
    <div className={styles.facetContainer}>
      <div className={styles.facetWrapper}>
        <span className={styles.facetLabel}>Filter By:</span>
        <select
          name='Holiday Type'
          aria-label='Select holiday type'
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

        <select
          name='Product Type'
          aria-label='Select product type'
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
      <span className={styles.productCount}>Holidays Found: {productCount}</span>
    </div>
  )
}

export default FacetBar