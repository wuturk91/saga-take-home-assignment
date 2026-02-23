import type { Product } from "../../types"
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCardContainer} key={product.id}>
      <img
        className={styles.productCardImage}
        src={product.images[0].filename}
        alt={product.images[0].alt}
      />
      <div className={styles.productCardInfo}>
        <p className={styles.productName}>{product.name}</p>
        {product.departure.bookingStatus === "SoldOut"
          ? <p className={styles.productPrice}>Sold Out</p>
          : <p className={styles.productPrice}>Total Price: £{product.departure.groupPrice.price}</p>
        }
      </div>
    </div>
  )
}

export default ProductCard