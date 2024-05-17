import styles from "./Home.module.css"
// import m3 from "assets/img/cars/m3.jpeg"

function Home() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div className={styles.item}>
        <h2>Car 1</h2>
        {/* <img src={m3} alt="Car" /> */}
        <p>100 000$</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default Home;