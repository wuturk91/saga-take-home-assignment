import { useState, useEffect } from 'react'

import { useProducts } from './hooks/useProducts'
import { useFacets } from './hooks/useFacets'

import FilterBar from './components/FacetBar'

import type { Product } from './types'

import './App.css'

function App() {
  const [holidayType, setHolidayType] = useState<string>('')
  const [productType, setProductType] = useState<string>('')

  const { results, loading } = useProducts(holidayType, productType)
  const { facets, facetsLoading } = useFacets()

  if (loading || facetsLoading) return <p>Loading products...</p>

  return (
    <div>
      <h1>Holidays</h1>
      {facets && 
        <FilterBar
          facets={facets}
          selectedHolidayType={holidayType}
          selectedProductType={productType}
          onHolidayChange={setHolidayType}
          onProductChange={setProductType}
        />
      }
      
      {results.map((result: Product) => (
        <div key={result.id}>
          <img src={result.images[0].filename} alt={result.images[0].alt} />
          <p>{result.name}</p>
          <p>Total Price: £{result.departure.groupPrice.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
