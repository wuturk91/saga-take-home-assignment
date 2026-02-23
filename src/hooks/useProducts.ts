import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/sagaApi'
import { type Product } from '../types'

export const useProducts = (holidayType: string, productType: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

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
        }
      })
  }, [holidayType, productType])

  return { products, loading, error }
}