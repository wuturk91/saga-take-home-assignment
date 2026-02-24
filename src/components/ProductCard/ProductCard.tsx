import type { Product, Price } from "../../types"
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isSolo: boolean = product.name.toLowerCase().includes('solo')
  const holidayPrice: Price = {
    currencyCode: isSolo ? product.departure.singlePrice.currencyCode : product.departure.groupPrice.currencyCode,
    price: isSolo ? product.departure.singlePrice.price : product.departure.groupPrice.price,
    wasPrice: isSolo ? product.departure.singlePrice.wasPrice : product.departure.groupPrice.wasPrice
  }

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCardImageContainer}>
        <img
          className={styles.productCardImage}
          src={product.images[0].filename}
          alt={product.images[0].alt}
        />
      </div>
      <div className={styles.productCardInfo}>
        <div>
          <p className={styles.productCardName}>{product.name}</p>
          <p className={styles.productCardDestinations}>{product.destinations.join(' | ')}</p>
          <ul>
            {product.metaData.meals.length &&
              <li className={styles.productCardMeals}>{product.metaData.meals[0].replace(':', '')} Included</li>
            }
            {product.metaData.numberOfExcursions > 0 &&
              <li className={styles.productCardMeals}>{product.metaData.numberOfExcursions} Excursions</li>
            }
          </ul>
        </div>
        <div className={styles.productCardFooter}>
          <div className={styles.productCardPriceContainer}>
            <p className={styles.productCardDateText}>{product.departure.metaData.nights} nights stay</p>
            <div className={styles.productCardPriceWrapper}>
              <p className={styles.productCardPrice}>from £{Math.floor(Number(holidayPrice.price))}</p>
              <p className={styles.productCardWasPrice}>was £{Math.floor(Number(holidayPrice.wasPrice))}</p>
            </div>
          </div>
          <button
            type='button'
            className={styles.productCardButton}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard