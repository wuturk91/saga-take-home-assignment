import { useProducts } from "../../hooks/useProducts"
import ProductCard from "../ProductCard/ProductCard"
import ProductListSkeleton from "./ProductListSkeleton"
import type { Product } from "../../types"
import styles from './ProductList.module.css'

type ProductListProps = {
  holidayType: string,
  productType: string
}

const ProductList = ({ holidayType, productType }: ProductListProps) => {
  const { products, loading } = useProducts(holidayType, productType)
    
  if (loading) return <ProductListSkeleton />

  return (
    <div className={styles.productListContainer}>
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}

export default ProductList