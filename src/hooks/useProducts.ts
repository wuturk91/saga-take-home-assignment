import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/sagaApi'
import { type Product } from '../types'

export const useProducts = (holidayType: string, productType: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const updateUrl = (holidayType: string, productType: string) => {
    const params = new URLSearchParams(window.location.search)

    if (!holidayType || holidayType === 'All Holiday Types') {
      params.delete('holidayType')
    } else {
      params.set('holidayType', holidayType)
    }

    if (!productType || productType === 'All Product Types') {
      params.delete('productType')
    } else {
      params.set('productType', productType)
    }
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname
    window.history.replaceState({}, '', newUrl)
  }

  useEffect(() => {
    setError('')
    setLoading(true)
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