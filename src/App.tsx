import { useState } from 'react'

import { useProducts } from './hooks/useProducts'
import { useFacets } from './hooks/useFacets'

import FilterBar from './components/FacetBar/FacetBar'

import type { Product } from './types'

import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import ProductList from './components/ProductList/ProductList'

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
      
      <ProductList products={results} />
    </div>
  )
}

export default App
