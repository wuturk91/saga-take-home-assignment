import styles from './ProductCard.module.css'

const ProductCardSkeleton = () => {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCardImageContainer}>
        <img
          className={styles.productCardImageSkeleton}
        />
      </div>
      <div className={styles.productCardInfoSkeleton}>
        <div>
        </div>
        <div className={styles.productCardFooter}>
          <div className={styles.productCardPriceContainer}>
            <div className={styles.productCardPriceWrapper}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton