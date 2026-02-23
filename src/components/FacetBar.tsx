import type { Facet } from "../types"

type FilterBarProps = {
  facets: Facet[],
  selectedHolidayType: string,
  selectedProductType: string,
  onHolidayChange: (value: string) => void,
  onProductChange: (value: string) => void,
}

const FilterBar = ({
  facets,
  selectedHolidayType,
  selectedProductType,
  onHolidayChange,
  onProductChange
}: FilterBarProps) => {
  const holidayFacet = facets.find((facet) => facet.key === 'HolidayType')
  const productFacet = facets.find((facet) => facet.key === 'ProductType')

  return (
    <nav>
      <div>
        <label htmlFor='holiday'>Holiday Type</label>
        <select
          id='holiday'
          value={selectedHolidayType}
          onChange={(e) => onHolidayChange(e.target.value)}
        >
          <option value=''>All Holiday Types</option>
          {holidayFacet?.items.map((item) => (
            <option key={item.key} value={item.key}>
              {item.key} - {item.count}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='product'>Product Type</label>
        <select
          id='product'
          value={selectedProductType}
          onChange={(e) => onProductChange(e.target.value)}
        >
          <option value=''>All Product Types</option>
          {productFacet?.items.map((item) => (
            <option key={item.key} value={item.key}>
              {item.key} - {item.count}
            </option>
          ))}
        </select>
      </div>
    </nav>
  )
}

export default FilterBar