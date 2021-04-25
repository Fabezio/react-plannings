import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import planningMai from '../data/ADS'
import Grid from '../components/Grid'
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plannings</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <p>mois: {Object.keys(plannings)}</p> */}
      {/* <p>nombre de jours: {days}</p> */}
      {/* <div> */}
      <h1>Planning du mois de mai</h1>
      <Grid />

      <footer className={styles.footer}>planning</footer>
    </div>
  )
}
