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
  const [productCount, setProductCount] = useState<string>('')

  return (
    <PageContainer>
      <Header />
      <FacetBar
        selectedHolidayType={holidayType}
        selectedProductType={productType}
        onHolidayChange={setHolidayType}
        onProductChange={setProductType}
        productCount={productCount}
      />
      <ProductList
        holidayType={holidayType}
        productType={productType}
        setProductCount={setProductCount}
      />
    </PageContainer>
  )
}

export default App
