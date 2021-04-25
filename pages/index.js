import Head from 'next/head'
import styles from '../styles/Home.module.css'
import plannings from '../data/plannings'
// import planningMai from '../data/ADS'
import Card from '../components/Card'
export default function Home () {
  const { ADS } = plannings.mai
  console.table(ADS)
  function whatToDisplay (obj) {
    return obj.nom || '- - -'
  }
  const dispatchGrids = ADS.map(val => {
    const { jour, chefJour, chefNuit, agentJour, agentNuit } = val
    return (
      <div className={styles.grid} key={jour}>
        <h3>{jour}</h3>
        {/* {chefJour ? chefJour.nom : "personne pour l'instant"} */}
        {/* <p>{chefJour.nom}</p> */}
        <Card chef={whatToDisplay(chefJour)} agent={whatToDisplay(agentJour)} />
        <Card chef={whatToDisplay(chefNuit)} agent={whatToDisplay(agentNuit)} />
      </div>
    )
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Plannings</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Planning du mois de mai</h1>
          {dispatchGrids}
        </main>
      </div>
      {/* <p>mois: {Object.keys(plannings)}</p> */}
      {/* <p>nombre de jours: {days}</p> */}
      {/* <div> */}

      <footer className={styles.footer}>planning</footer>
    </div>
  )
}
