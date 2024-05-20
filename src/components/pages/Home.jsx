import styles from "./Home.module.css"
import { cars as carsData} from "../../assets/cars.data"
import CarItem from "../car-item/CarItem";
import CarForm from "../car-form/CarForm";
import { useState } from "react";

function Home() {
  const [cars, setCars] = useState(carsData)

  return (
    <div className={styles.container}>
      <h1>Cars catalog</h1>
      <CarForm setCars={setCars}/>
      <div className={styles.wrapper}>
        {cars.map(car => {
          return <CarItem key={car.id} car={car} />
        })}
      </div>
    </div>
  )
}

export default Home;