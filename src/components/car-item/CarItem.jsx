import styles from "../pages/Home.module.css"

function CarItem({car}) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={car.image} alt="" />
      </div>
      <div className={styles.info}>
        <h2>{car.name} - {car.year} </h2>
        <p>{car.price}$</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default CarItem;