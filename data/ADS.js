import plannings from './plannings.js'

const { ADS, days } = plannings.mai
const { chefs, agents } = ADS
const flatADS = ADS.flat()
console.log(flatADS)
// .chef = {...planningADS.jour.chef, {nom:val.lastname, prenom: val.firstname}}
// console.log(chefs.length)
// console.log(agents.length)
// let may = []
// may = [...plannings]
// const may = plannings.mai['Arcs de Seine'].map(d => console.log(d))
let planningMai = []
for (let day = 1; day <= parseInt(days); day++) {
  planningMai = [...planningMai, day]
  
  // chefs.map(val => {
  //   const { nuit, jour } = val
  //   if (val.jour) {
  //     jour.map(d => {
  //       if (d === day) {
  //         planningMai[day] = [
  //           ...planningMai[day],
  //           {
  //             id: `${d}JS2${val.firstname[0]}${val.lastname[0]}`,
  //             nom: val.lastname,
  //             prenom: val.firstname,
  //             vac: 'jour',
  //             // date: d,
  //             fonction: 'ssiap 2'
  //           }
  //         ]
  //       }
  //     })
  //   } else {
  //     // console.log(jour)

  //     nuit.map(d => {
  //       if (d === day) {
  //         planningMai[day] = [
  //           ...planningMai[day],
  //           {
  //             id: `${d}NS2${val.firstname[0]}${val.lastname[0]}`,
  //             nom: val.lastname,
  //             prenom: val.firstname,
  //             vac: 'nuit',
  //             // date: d,
  //             fonction: 'ssiap 2'
  //           }
  //         ]
  //       }
  //     })
  //   }
  // })
  // agents.map(val => {
  //   const { nuit, jour } = val
  //   if (val.jour) {
  //     jour.map(d => {
  //       if (d === day) {
  //         planningMai[day] = [
  //           ...planningMai[day],
  //           {
  //             id: `${d}JS1${val.firstname[0]}${val.lastname[0]}`,
  //             nom: val.lastname,
  //             prenom: val.firstname,
  //             vac: 'jour',
  //             // date: d,
  //             fonction: 'ssiap 1'
  //           }
  //         ]
  //       }
  //     })
  //   } else {
  //     // console.log(jour)

  //     nuit.map(d => {
  //       if (d === day) {
  //         planningMai[day] = [
  //           ...planningMai[day],
  //           {
  //             id: `${d}NS1${val.firstname[0]}${val.lastname[0]}`,
  //             nom: val.lastname,
  //             prenom: val.firstname,
  //             vac: 'nuit',
  //             // date: d,
  //             fonction: 'ssiap 1'
  //           }
  //         ]
  //       }
  //     })
  //   }
  // })
}

// planningMai.sort(planningMai.date)
console.log(planningMai)
// console.table(ADS)
export default planningMai
