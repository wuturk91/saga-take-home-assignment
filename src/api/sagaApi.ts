export const fetchProducts = async () => {
  const url: string = 'api/search/products'

  try {
    const response: Response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch products')
    const { results } = await response.json()
    return results
  } catch (error) {
    // handle error with log and return error message
  }
}

export const fetchFacets = async () => {
  const url: string = 'api/search/facets'

  try {
    const response: Response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch facets')
    const { facets } = await response.json()
    return facets
  } catch (error) {
    // handle error with log and return error message
  }
}