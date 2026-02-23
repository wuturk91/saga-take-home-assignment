import { useProducts } from "../../hooks/useProducts"
import ProductCard from "../ProductCard/ProductCard"
import ProductListSkeleton from "./ProductListSkeleton"
import type { Product } from "../../types"
import styles from './ProductList.module.css'
import Alert from "../Alert/Alert"

type ProductListProps = {
  holidayType: string,
  productType: string
}

const ProductList = ({ holidayType, productType }: ProductListProps) => {
  const { products, loading, error } = useProducts(holidayType, productType)
    
  if (loading) return <ProductListSkeleton />
  if (error) return <Alert error={error} />

  return (
    <div className={styles.productListContainer}>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList