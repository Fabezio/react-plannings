import styles from '../styles/Home.module.css'
// import planningMai from '../data/ADS'

function Card ({ chef, agent }) {
  return (
    <div className={styles.card}>
      <p className={styles.bold}>{chef}</p>
      <p className={''}>{agent}</p>
    </div>
  )
}
export default Card
