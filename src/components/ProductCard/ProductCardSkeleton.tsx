import styles from './ProductCard.module.css'

const ProductCardSkeleton = () => {
  return (
    <div className={styles.productCardContainer}>
      <div
        className={styles.productCardImageSkeleton}
      ></div>
      <div className={styles.productCardInfo}>
      </div>
    </div>
  )
}

export default ProductCardSkeleton