import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/sagaApi'
import { type Product } from '../types'

export const useProducts = (holidayType: string, productType: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const updateUrl = (holidayType: string, productType: string) => {
    console.log('called')
    const params = new URLSearchParams()
    if (holidayType) params.set('holidayType', holidayType)
    if (productType) params.set('productType', productType)
    if (params.toString()) window.history.replaceState({}, '', `?${params.toString()}`)
  }

  useEffect(() => {
    setError('')
    fetchProducts(holidayType, productType)
      .then(result => {
        if (result && result.error) {
          setError(result.error)
          setProducts([])
        } else {
          setProducts(result)
          setLoading(false)
          updateUrl(holidayType, productType)
        }
      })
  }, [holidayType, productType])

  return { products, loading, error }
}