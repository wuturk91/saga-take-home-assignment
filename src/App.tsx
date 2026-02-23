import { useState } from 'react'
import PageContainer from './Layouts/PageContainer'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {
  const [holidayType, setHolidayType] = useState<string>('')
  const [productType, setProductType] = useState<string>('')

  return (
    <PageContainer>
      <Header
        holidayType={holidayType}
        setHolidayType={setHolidayType}
        productType={productType}
        setProductType={setProductType}
      />
      
      <ProductList
        holidayType={holidayType}
        productType={productType}
      />
    </PageContainer>
  )
}

export default App
