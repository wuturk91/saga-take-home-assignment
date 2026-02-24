import { useState } from 'react'
import PageContainer from './Layouts/PageContainer'
import Header from './components/Header/Header'
import FacetBar from './components/FacetBar/FacetBar'
import ProductList from './components/ProductList/ProductList'

function App() {
  const params = new URLSearchParams(window.location.search)
  const initialHolidayType = params.get('holidayType') || ''
  const initialProductType = params.get('productType') || ''
  const [holidayType, setHolidayType] = useState<string>(initialHolidayType)
  const [productType, setProductType] = useState<string>(initialProductType)

  return (
    <PageContainer>
      <Header />
      <FacetBar
        selectedHolidayType={holidayType}
        selectedProductType={productType}
        onHolidayChange={setHolidayType}
        onProductChange={setProductType}
      />
      <ProductList
        holidayType={holidayType}
        productType={productType}
      />
    </PageContainer>
  )
}

export default App
