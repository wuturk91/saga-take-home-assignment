import { useEffect, useState } from 'react'
import { fetchFacets } from '../api/sagaApi'
import { type Facet } from '../types'

export const useFacets = () => {
  const [facets, setFacets] = useState<Facet[]>()
  const [facetsLoading, setFacetsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchFacets()
      .then(result => {
        const limitedFacets: Facet[] = result.filter((facet: Facet) => facet.key === 'HolidayType' || facet.key === 'ProductType')
        setFacets(limitedFacets)
        setFacetsLoading(false)
      })
  }, [])

  return { facets, facetsLoading }
}