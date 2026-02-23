export const fetchProducts = async (holidayType: string, productType: string) => {
  let url: string = '/api/search/products'
  const params = new URLSearchParams()

  if(holidayType) params.append('holidayTypes', holidayType)
  if(productType) params.append('productTypes', productType)

  if (params.toString()) {
    url = `${url}?${params.toString()}`
  }

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
  const url: string = '/api/search/facets'

  try {
    const response: Response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch facets')
    const { facets } = await response.json()
    return facets
  } catch (error) {
    // handle error with log and return error message
  }
}