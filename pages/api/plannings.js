// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import plannings from '../../data/plannings'
export default (req, res) => {
  res.status(200).json(plannings.mai)
}
