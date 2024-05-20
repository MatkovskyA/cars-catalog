import { useState } from "react";
import styles from "./carForm.module.css";

const clearData = {
  price: '',
  name: '',
  image: '',
}

const CarForm = ( {setCars} ) => {
  const [data, setData] = useState(clearData)

  const createCar = e => {
    e.preventDefault()
    setCars(prev => [{id: prev.length + 1, ...data}, ...prev])

    setData(clearData)
  }

  return <form className={styles.form}>
    <input type="text"
      placeholder="Name"
      onChange={e => setData(prev => ({
        ...prev,
        name: e.target.value,
      }))
    }
      value={data.name}
    />
    <input type="number"
      placeholder="Price"
      onChange={e => setData(prev => ({
        ...prev,
        price: e.target.value,
      }))
    }
      value={data.price} 
      />
    <input type="text"
      placeholder="Image"
      onChange={e => setData(prev => ({
        ...prev,
        image: e.target.value,
      }))
    }
      value={data.image} 
      />
    <button onClick={e => createCar(e)}>Create</button>
  </form>
}

export default CarForm;