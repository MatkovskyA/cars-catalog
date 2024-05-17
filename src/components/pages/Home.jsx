import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.item}>
      <h1>Cars catalog</h1>
      <p>100 000$</p>
      <button>Read more</button>
    </div>
  )
}

export default Home;