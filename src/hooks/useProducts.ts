import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/sagaApi'

export const useProducts = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchProducts()
      .then(result => {
        setResults(result)
        setLoading(false)
      })
  }, [])

  return { results, loading }
}