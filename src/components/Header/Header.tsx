import FacetBar from "../FacetBar/FacetBar"
import FacetBarSkeleton from "../FacetBar/FacetBarSkeleton"
import { useFacets } from "../../hooks/useFacets"
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
  const { facets, facetsLoading } = useFacets()
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerHeading}>Saga Holidays</h1>
      <div className={styles.facetWrapper}>
        {facetsLoading && <FacetBarSkeleton />}
        {!facetsLoading && facets &&
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