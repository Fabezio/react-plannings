// import React from 'react'
import Head  from 'next/head'
import styles from '../styles/Home.module.css'

function Admin () {
    const  {card, grid, main, title, container} = styles
    return (
    <div>
        <Head>
        <title>Plannings | Administrateur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <div className={container}>
        <h1 className={title}>Page administrateurs</h1>
        <main className={main}>
            <div className={grid}>
                <div className={card} >
                    <p>info</p>
                </div>
                <div className={card} >
                    <p>nouvelle info</p>
                </div>
            </div>
        </main>
    </div>

    </div>)
}

export default Admin