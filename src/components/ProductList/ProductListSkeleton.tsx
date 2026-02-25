import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton'
import styles from './ProductList.module.css'

const ProductListSkeleton = () => {
  return (
    <div className={styles.productListContainer}>
      {Array.from({ length: 5 }).map((_, id) => (
        <ProductCardSkeleton key={id} />
      ))}
    </div>
  )
}

export default ProductListSkeleton