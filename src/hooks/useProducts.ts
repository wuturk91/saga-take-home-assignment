import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/sagaApi'
import { type Product } from '../types'

export const useProducts = (holidayType: string, productType: string) => {
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchProducts(holidayType, productType)
      .then(result => {
        setResults(result)
        setLoading(false)
      })
  }, [holidayType, productType])

  return { results, loading }
}