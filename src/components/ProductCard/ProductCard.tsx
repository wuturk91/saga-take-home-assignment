import type { Product } from "../../types"
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const soldOut = product.departure.bookingStatus === "SoldOut"
  const soloTravel = product.departure.metaData.solo
  return (
    <div className={styles.productCardContainer}>
      <img
        className={styles.productCardImage}
        src={product.images[0].filename}
        alt={product.images[0].alt}
      />
      <div className={styles.productCardInfo}>
        <div>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productBoard}>{product.departure.metaData.boardBasis}</p>
          <div className={styles.dateWrapper}>
            <p className={styles.dateText}>{product.departure.metaData.nights} nights stay</p>
            <p className={styles.dateText}>Total Duration: {product.departure.metaData.duration} days</p>
          </div>
        </div>
        <div>
          {soldOut && <p className={styles.productPrice}>Sold Out</p>}
          {!soldOut && soloTravel && (
            <>
              <p className={styles.priceType}>Solo Travel Price</p>
              <p className={styles.productPrice}>Total Price: £{product.departure.singlePrice.price}</p>
            </>
          )}
          {!soldOut && (
            <>
              <p className={styles.priceType}>Group Travel Price</p>
              <p className={styles.productPrice}>Total Price: £{product.departure.groupPrice.price}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard