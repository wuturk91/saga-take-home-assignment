import { useFacets } from "../../hooks/useFacets"
import FacetBar from "../FacetBar/FacetBar"
import FacetBarSkeleton from "../FacetBar/FacetBarSkeleton"
import Alert from "../Alert/Alert"
import styles from './Header.module.css'

type HeaderProps = {
  holidayType: string;
  setHolidayType: (val: string) => void
  productType: string;
  setProductType: (val: string) => void
}

const Header = ({
  holidayType,
  productType,
  setHolidayType,
  setProductType
}: HeaderProps) => {
  const { facets, facetsLoading, error } = useFacets()

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerHeading}>Saga Holidays</h1>
      <div className={styles.facetWrapper}>
        {facetsLoading && !error && <FacetBarSkeleton />}
        {error && <Alert error={error} />}
        {!facetsLoading && !error && facets &&
          <FacetBar
            facets={facets}
            selectedHolidayType={holidayType}
            selectedProductType={productType}
            onHolidayChange={setHolidayType}
            onProductChange={setProductType}
          />
        }
      </div>
    </div>
  )
}

export default Header