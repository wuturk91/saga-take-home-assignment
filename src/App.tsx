import { useProducts } from './hooks/useProducts'
import './App.css'
import type { Product } from './types'

function App() {
  const { results, loading } = useProducts()

  if (loading) return <p>Loading products...</p>

  return (
    <div>
      <h1>Holidays</h1>
      {results.map((result: Product) => (
        <div key={result.id}>
          <img src={result.images[0].filename} alt={result.images[0].alt} />
          <p>{result.name}</p>
          <p>Total Price: £{result.departure.groupPrice.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
