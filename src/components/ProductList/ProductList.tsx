import ProductCard from "../ProductCard/ProductCard"
import type { Product } from "../../types"
import styles from './ProductList.module.css'

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productListContainer}>
      {products.map((result: Product) => (
        <ProductCard product={result} />
      ))}
    </div>
  )
}

export default ProductList