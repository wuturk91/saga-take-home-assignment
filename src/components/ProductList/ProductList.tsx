import { useEffect } from "react"
import { useProducts } from "../../hooks/useProducts"
import NoProductsContainer from "../NoProductsContainer/NoProductsContainer"
import ProductCard from "../ProductCard/ProductCard"
import ProductListSkeleton from "./ProductListSkeleton"
import type { Product } from "../../types"
import styles from './ProductList.module.css'
import Alert from "../Alert/Alert"

type ProductListProps = {
  holidayType: string;
  productType: string;
  setProductCount: (val: string) => void;
}

const ProductList = ({ holidayType, productType, setProductCount }: ProductListProps) => {
  const { products, loading, error } = useProducts(holidayType, productType)

  useEffect(() => {
    setProductCount(products.length.toString())
  }, [products])

  if (loading) return <ProductListSkeleton />
  if (error) return <Alert error={error} />



  return (
    <div className={styles.productListContainer}>
      {products.length === 0 &&
        <NoProductsContainer />
      }
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList